import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss',]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "server was not created";
  serverName = "teste server";
  serverCreated = false;
  servers = ["teste server", "teste server 2"]
  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 2000);
  }
  ngOnInit() { }

  onCreatedServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

