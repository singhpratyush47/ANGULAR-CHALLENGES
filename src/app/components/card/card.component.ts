import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @ViewChild('header') header;
  @ContentChild('header') header1;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('test');
  }
}
