import { Component, OnInit } from '@angular/core';
import { Processor } from '../processor';
import { HEROES } from '../mock-processors';

@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.css']
})

export class ProcessorsComponent implements OnInit {

  processors = HEROES;
  selectedProcessor: Processor;

  constructor() { }

  ngOnInit() {
  }

  onSelect(processor: Processor): void {
    this.selectedProcessor = processor;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/