import { Component } from '@angular/core';

@Component({
  selector: 'app-taskdirectives',
  templateUrl: './taskdirectives.component.html',
  styleUrls: ['./taskdirectives.component.scss']
})
export class TaskdirectivesComponent {
  showPassword = false;
  log = [];

  onToggleDetails() {
    this.showPassword = !this.showPassword;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
