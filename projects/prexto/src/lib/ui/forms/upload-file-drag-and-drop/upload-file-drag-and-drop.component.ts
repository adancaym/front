import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {ControllerFileApi, ModelFileApi, EntityFileApi} from '../../../../api';
import {ControllerFileInternal} from '../../../../internal';

@Component({
  selector: 'lib-upload-file-drag-and-drop',
  templateUrl: './upload-file-drag-and-drop.component.html',
  styleUrls: ['./upload-file-drag-and-drop.component.css']
})
export class UploadFileDragAndDropComponent implements OnInit {

  // config file input inputs
  @Input() accept: string;
  // preloads inputs
  @Input() arrayEntityFileApi: Array<EntityFileApi>;
  @Input() arrayModelFileApi: Array<ModelFileApi>;
  @Input() arrayIdFileApi: Array<string>;
  // config ui inputs
  @Input() showTable: boolean;
  @Input() showSlider: boolean;

  @Output() fileSaved = new EventEmitter<ModelFileApi>();

  public files: NgxFileDropEntry[] = [];
  controllerFileApi: ControllerFileApi;
  controllerFileInternal: ControllerFileInternal;

  progress: number;
  showProgressBar: boolean;
  constructor() {
    this.controllerFileApi = new ControllerFileApi();
    this.controllerFileInternal = new ControllerFileInternal();
  }
  async ngOnInit() {
    await this.initVars();
  }
  async saveFile(ngxFileDropEntry: NgxFileDropEntry){
    const file = await this.getFile(ngxFileDropEntry.fileEntry);
    const formData = new FormData();
    formData.append('file', file, ngxFileDropEntry.relativePath);
    const fileupload = await this.controllerFileInternal.uploadFile(formData);
    this.emitFileSaved(fileupload);
  }

  emitFileSaved(file: ModelFileApi){
    this.fileSaved.emit(file);
    this.arrayModelFileApi.push(file);
  }
  async saveDirectory(ngxFileDropEntry: NgxFileDropEntry){
    const fileEntry = ngxFileDropEntry.fileEntry as FileSystemDirectoryEntry;
    fileEntry.createReader().readEntries((fileSystemEntries: FileSystemEntry[]) => {
      fileSystemEntries.forEach( async (fileSystemEntry: FileSystemEntry) => {
        const file = await this.getFile(fileSystemEntry);
        const formData = new FormData();
        formData.append('file', file, ngxFileDropEntry.relativePath);
        const fileupload = await this.controllerFileInternal.uploadFile(formData);
        this.emitFileSaved(fileupload);
      });
    });
  }
  async fillArrayModelFile(){
    if (this.arrayEntityFileApi.length > 0){
      this.arrayModelFileApi = this.arrayModelFileApi.concat(this.arrayEntityFileApi.map(entity => entity.getModel()));
    }
    if (this.arrayIdFileApi.length > 0){
      for (const id of this.arrayIdFileApi){
        this.arrayModelFileApi.push(await this.controllerFileApi.get(id).then(entity => entity.getModel()));
      }
    }
  }
  async initVars(){
    if (!this.accept){
      this.accept = '*';
    }
    if (!this.arrayEntityFileApi){
      this.arrayEntityFileApi = [];
    }
    if (!this.arrayModelFileApi){
      this.arrayModelFileApi = [];
    }
    if (!this.arrayIdFileApi){
      this.arrayIdFileApi = [];
    }
    if (!this.showSlider){
      this.showSlider = false;
    }
    if (!this.showTable){
      this.showTable = true;
    }
    this.progress = 0;
    this.showProgressBar = false;
    await this.fillArrayModelFile();
  }
  async getFile(fileEntry: FileSystemEntry): Promise<File> {
    const fileSystemEntry = fileEntry as FileSystemFileEntry;
    const getFile = new Promise<File>(((resolve, reject) => {
      try {
        fileSystemEntry.file(((file: File) => {
          resolve(file);
        }));
      }catch (e) {
        reject(e);
      }
    }));
    return  await getFile.then((file: File) => file);
  }
  async dropped(files: NgxFileDropEntry[]) {
    this.showProgressBar = true;
    this.files = files;
    for (const droppedFile of files) {
      this.progress++;
      if (droppedFile.fileEntry.isFile) {
        await this.saveFile(droppedFile);
      } else if (droppedFile.fileEntry.isDirectory) {
        await this.saveDirectory(droppedFile);
      }
    }
    this.progress = 0;
    this.showProgressBar = false;
  }

  remove(file: ModelFileApi) {
    console.log(file);
  }
}


