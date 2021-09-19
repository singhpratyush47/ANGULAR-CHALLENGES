import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.css']
})
export class CreditCardInputComponent implements OnInit {

  @Input() public creditCardNumber:string;
  @Input() public isReadonly:boolean;

  @Input()
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  private _name: string = '';
  constructor() { }

  ngOnInit(): void {
    if(this.isReadonly && this.creditCardNumber!=''){
      const parts=this.creditCardNumber.match(/[\s\S]{1,4}/g);
      const formattedCreditCardNumber=parts.map((part,index)=>{
        if(index===parts.length-1){
          return part;
        }
        return 'xxxx';
      });
      this.creditCardNumber=formattedCreditCardNumber.join('-');
    }
  }

  hello(){
    alert('Hello');
  }
}
