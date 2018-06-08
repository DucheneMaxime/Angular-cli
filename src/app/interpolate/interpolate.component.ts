import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {
  prenom:string = "Sony";
  nom: string = "Lauret";
  formation:Formation = new Formation("test formation", "ceci est une formation");
  formationJS:Formation;

  color:string = "green";
  isHidden: boolean = false;
  toHide: boolean = false;

  constructor() { }

  getFullName(){
    return this.prenom + ' ' + this.nom;
  }

  ngOnInit() {
    setTimeout(() => {
      this.formationJS = new Formation('Module JavaScript', 'description');
    }, 3000);
    setInterval(() => {
      if(this.color=="green")
        this.color = "red";
      else
        this.color="green";
    }, 1000)
  }

  dispa(){
    this.isHidden = !this.isHidden;
  }

  mouseover(){
    this.toHide = !this.toHide;
  }

  mouseout(){
    this.toHide = !this.toHide;
  }
}

export class Formation {
  nom:string;
  description: string;

  constructor(nom, description){
    this.nom = nom;
    this.description = description;
  }
}
