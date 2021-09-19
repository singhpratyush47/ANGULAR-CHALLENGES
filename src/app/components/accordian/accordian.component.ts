import { Component, Input, OnInit } from '@angular/core';
import { AccordianItem } from './accordian-item.interface';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  @Input() public accordianItems:AccordianItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
