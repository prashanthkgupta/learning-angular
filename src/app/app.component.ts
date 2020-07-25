import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameEvenNumbers: number[] = [];
  gameOddNumbers: number[] = [];

  onEvenGenerated($event: { value: number }): void {
    this.gameEvenNumbers.push($event.value);
  }

  onOddGenerated($event: { value: number }): void {
    this.gameOddNumbers.push($event.value);
  }
}
