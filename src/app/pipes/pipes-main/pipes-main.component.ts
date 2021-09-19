import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-main',
  templateUrl: './pipes-main.component.html',
  styleUrls: ['./pipes-main.component.css']
})
export class PipesMainComponent implements OnInit {

  public flattenData=[1,2,[3],[4,[5,6,[7]]]];

  constructor() { }

  ngOnInit(): void {
  }

}
