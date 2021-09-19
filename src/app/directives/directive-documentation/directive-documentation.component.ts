import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-documentation',
  templateUrl: './directive-documentation.component.html',
  styleUrls: ['./directive-documentation.component.css']
})
export class DirectiveDocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(){
    console.log('Hello');
  }
}
