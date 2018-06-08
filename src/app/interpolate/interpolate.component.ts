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

  constructor() { }

  getFullName(){
    return this.prenom + ' ' + this.nom;
  }

  ngOnInit() {
    setTimeout(() => {
      this.formationJS = new Formation('Module JavaScript', 'description');
    }, 3000)
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
