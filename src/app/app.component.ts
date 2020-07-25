import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'test server', content: 'just the test server'}];

  onServerAdded($serverData: { serverName: string, serverContent: string }): void {
    this.serverElements.push({
      type: 'server',
      name: $serverData.serverName,
      content: $serverData.serverContent
    });
  }

  onBlueprintAdded($blueprintData: { blueprintName: string, blueprintContent: string }): void {
    this.serverElements.push({
      type: 'blueprint',
      name: $blueprintData.blueprintName,
      content: $blueprintData.blueprintContent
    });
  }

  changeFirstServer(): void {
    this.serverElements[0].name = 'Changed';
  }

  deleteFirstServer(): void {
    this.serverElements.splice(0, 1);
  }

}
