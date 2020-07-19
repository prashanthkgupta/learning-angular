import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreatedStatus = 'No Server Created Yet';
  numberOfServerCreated = 0;
  servername = '';
  isServerCreated = false;
  servers = ['server1', 'server2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onServerCreation(): void {
    this.numberOfServerCreated++;
    this.serverCreatedStatus = this.numberOfServerCreated + ' Server Created and last server name was ' + this.servername;
    this.isServerCreated = true;
    this.servers.push(this.servername);
  }

  onServerNameChange(event: Event): void {
    this.servername = (event.target as HTMLInputElement).value;
  }
}
