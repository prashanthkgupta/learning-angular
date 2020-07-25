import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  currentEvenNumber = 1;
  currentOddNumber = 1;
  interval;

  @Output() evenGenerated = new EventEmitter<{ value: number }>();
  @Output() oddGenerated = new EventEmitter<{ value: number }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onStartGame(): void {
    this.interval = setInterval(
      () => {
        if (Math.trunc(Math.random() * 1000) % 2 === 0) {
          this.evenGenerated.emit({value: this.currentEvenNumber++});
        } else {
          this.oddGenerated.emit({value: this.currentOddNumber++});
        }
      }, 1000);
  }

  onEndGame(): void {
    clearInterval(this.interval);
  }

}
