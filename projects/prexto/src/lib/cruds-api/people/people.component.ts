import {Component, OnInit, ViewChild} from '@angular/core';
import {ControllerPeopleApi, EntityPeopleApi, ModelPeopleApi} from '../../../api/endpoints/people';
import {TableComponent} from '../../ui/cruds/cruds-components';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'lib-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  controller: ControllerPeopleApi;
  @ViewChild('table') tabla: TableComponent<ControllerPeopleApi, EntityPeopleApi, ModelPeopleApi>;

  constructor(router: Router, toast: ToastrService) {
    this.controller = new ControllerPeopleApi();
    this.tabla = new TableComponent<ControllerPeopleApi, EntityPeopleApi, ModelPeopleApi>(router, toast);

  }
  ngOnInit(): void {
  }

}
