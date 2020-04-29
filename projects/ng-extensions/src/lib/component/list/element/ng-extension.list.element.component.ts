import {Component, Input} from "@angular/core";
import {NgListElement} from "../ng-extension.list.model";

@Component({
  selector: 'ng-list-element',
  templateUrl: './ng-extension.list.element.component.html',
  styleUrls: [
    '../../ng-extension.styles.scss',
    './ng-extension.list.element.component.scss'
  ]
})
export class NgListElementComponent {

  @Input() public height: string = "fit-content";
  @Input() public listElement: NgListElement;

  constructor() {
  }

}
