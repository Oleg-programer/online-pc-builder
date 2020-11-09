import { Component, OnInit } from '@angular/core';
import { Hero } from '../processor';
import { HEROES } from '../mock-processors';

@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.css']
})

export class HeroesComponent implements OnInit {

  processors = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(processor: Hero): void {
    this.selectedHero = processor;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/