import { Component } from '@angular/core';
import { Formation } from './interpolate/interpolate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listFormations:Array<Formation> = [];

  constructor() { }

  ngOnInit() {
    this.listFormations.push(new Formation("test1", "blabla1"));
    this.listFormations.push(new Formation("test2", "blabla2"));
    this.listFormations.push(new Formation("test3", "blabla3"));
  }

  handleFormationSelected(formation){
    console.log("Formation selected", formation);
  }
}
