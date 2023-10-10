import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskdatabinding',
  templateUrl: './taskdatabinding.component.html',
  styleUrls: ['./taskdatabinding.component.scss']
})
export class TaskdatabindingComponent implements OnInit{
  buttomOnlyClicked = false;
  username = '';

  ngOnInit(): void {
  
  }
  updateUsername(event: any){
    this.username = (<HTMLInputElement>event.target).value;
  }
}
