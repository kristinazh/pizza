import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {

  @ViewChild('popup')
   popup!: TemplateRef<ElementRef>;

  @Input() name: string = '';

  constructor(private modalService: NgbModal) {
  }

  open(): void {
    this.modalService.open(this.popup)
  }

}

