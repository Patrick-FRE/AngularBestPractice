import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  message = { value: 'Home Page' };
  constructor(private modalService: ModalService) {}

  ngOnInit() {}
  showModal() {
    console.log('click');
    this.modalService.showModal('hello-modal');
  }
}
