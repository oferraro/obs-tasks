import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-a-modal',
  templateUrl: './a-modal.component.html',
  styleUrls: ['./a-modal.component.scss']
})
export class AModalComponent implements OnInit {
  @Input() modal_title;
  @Input() modal_content;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  confirmation(confirmation: boolean) {

  }

}
