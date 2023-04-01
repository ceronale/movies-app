import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() img: string | undefined;
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() content: string | undefined;
  @Input() id: string | undefined;
  @Input() descripcion: string | undefined;
  des = 'a';
  isModalOpen = false;
  loadModal(isOpen: boolean, id: any) {
    this.isModalOpen = isOpen;
    this.des = id;
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
