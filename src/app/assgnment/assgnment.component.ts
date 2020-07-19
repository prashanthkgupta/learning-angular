import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assgnment',
  templateUrl: './assgnment.component.html',
  styleUrls: ['./assgnment.component.css']
})
export class AssgnmentComponent implements OnInit {
  isParagraphEnable = true;
  buttonClicked = 0;
  buttonClickedArr = [];


  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.isParagraphEnable = !this.isParagraphEnable;
    this.buttonClickedArr.push(++this.buttonClicked);
    console.log(this.buttonClicked);
  }

}
