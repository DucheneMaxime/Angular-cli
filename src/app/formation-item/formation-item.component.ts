import { Component, OnInit, Input } from '@angular/core';
import {Formation } from '../interpolate/interpolate.component';

@Component({
  selector: 'app-formation-item',
  templateUrl: './formation-item.component.html',
  styleUrls: ['./formation-item.component.css']
})
export class FormationItemComponent implements OnInit {

  @Input()
  formation: Formation;

  constructor() { }

  ngOnInit() {
  }

}