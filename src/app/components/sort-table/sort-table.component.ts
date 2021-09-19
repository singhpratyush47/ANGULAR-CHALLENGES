import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.css']
})
export class SortTableComponent implements OnInit {

  public tableData:any[]=[
    {First:"Pratyush",Last:"Singh",Age:26,dob:"04/08/95",Living:true},
    {First:"Nisha",Last:"Singh",Age:52,dob:"02/12/69",Living:true},
    {First:"Jitender",Last:"Singh",Age:53,dob:"03/12/71",Living:true},
    {First:"Vaibhav",Last:"Singh",Age:22,dob:"03/08/99",Living:false}
  ];
  public sortDirection=true;
  constructor() { }

  ngOnInit(): void {
  }

  sortTheColumn(headerData:{key:string,value:any}){
    const {key,value}=headerData;
    this.sortDirection=!this.sortDirection;

    switch(true){
      case typeof value==='boolean':
        this.sortBoolean(key);
      break;

      case typeof value==='number':
      break;

      case typeof value==='string':
      break;
  
    } 
  }

  sortBoolean(key: string) {
    this.tableData.sort((value1:any,value2:any)=>{
      if(this.sortDirection){
        return Number(value1[key])- Number(value2[key]);
      }else{
        return Number(value2[key])- Number(value1[key]);
      }
    })
  }
}
