import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {
  username = '';
  isButtonDisable = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  onInputChange(): void {
    this.isButtonDisable = this.username.length === 0;
  }
  onButtonClick(): void{
    this.username = '';
  }

}
