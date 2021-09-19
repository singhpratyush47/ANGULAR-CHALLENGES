import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css']
})
export class SimpleTableComponent implements OnInit {

  @Input() public tableData:any[]=[
    {first:"Jai Shri",last:"Ram",dob:"10/25/87"},
    {first:"Hare",last:"Krishna",dob:"10/25/87"},
    {first:"Hare",last:"Ram",dob:"10/25/87"},
    {first:"Ram Ram",last:"Hare Hare",dob:"10/25/87"}
  ];

  @Output() public headerSelected=new EventEmitter<{key:string,value:any}>();
  constructor() { }

  ngOnInit(): void {
  }

  public headerSelection(key:string,value:any){
    this.headerSelected.emit({key,value});
  }
}
