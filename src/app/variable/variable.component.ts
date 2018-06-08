import { Component, OnInit } from '@angular/core';
import {Formation } from '../interpolate/interpolate.component';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent implements OnInit {
  listFormations:Array<Formation> = [];

  isDisplay: boolean = true;

  constructor() { }

  ngOnInit() {
    this.listFormations.push(new Formation("test1", "blabla1"));
    this.listFormations.push(new Formation("test2", "blabla2"));
    this.listFormations.push(new Formation("test3", "blabla3"));
  }

  toHide(){
    this.isDisplay = !this.isDisplay;
  }

  colorList(index:number){
    if(index==0)
      return "red";
    if(index==this.listFormations.length-1)
      return "green";
  }

  backgroundColorListe(index:number){
    if(index%2==0)
      return "grey";
  }

}
