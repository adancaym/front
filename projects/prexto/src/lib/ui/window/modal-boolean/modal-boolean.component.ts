import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-modal-boolean',
  templateUrl: './modal-boolean.component.html',
  styleUrls: ['./modal-boolean.component.css']
})
export class ModalBooleanComponent implements OnInit {
  @Input() title: string;
  @Input() textButton: string;
  @Input() classButton: string;
  @Input() icons: string;
  @Output() modalOnClose = new EventEmitter<boolean>();
  @Output() modalOnShow = new EventEmitter<boolean>();
  @Input() show: boolean;
  @Input() useButton: boolean;
  @Input() callback: any;
  @Input() args: Array<any>;
  @Input() span: string;
  callbackIsExecutin: boolean;
  closeResult = '';
  constructor(private modalService: NgbModal) {
  }
  ngOnInit(): void {
    if (this.title == null) { this.title = ''; }
    if (this.show == null) { this.show = false; }
    if (this.textButton == null) { this.textButton = 'se te olvido porner el textButton'; }
    if (this.classButton == null) { this.classButton = 'btn btn-primary'; }
    if (this.icons == null) { this.icons = ''; }
    if (this.useButton == null) { this.useButton = true; }
  }
  public executeCallBack() {
    if (this.callback != null && this.callbackIsExecutin === false) {
      this.callbackIsExecutin = true;
      this.callback.apply(null, this.args);
      this.callbackIsExecutin = false;
    }
  }
  open(content) {
    this.modalService.open(content, {
      ariaLabelledBy: this.title,
      size: 'xl',
      scrollable: true,
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
