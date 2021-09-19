import { Component, OnInit } from '@angular/core';
import { AccordianItem } from '../accordian/accordian-item.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public accordianItems:AccordianItem[]=[
    {
      title:'Example 1',
      content:'Example Content 1',
      isExpanded:false
    },
    {
      title:'Example 2',
      content:'Example Content 2',
      isExpanded:false
    },
    {
      title:'Example 3',
      content:'Example Content 3',
      isExpanded:false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
