import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective {

  @Output() public debounceClick=new EventEmitter();
  public click=new Subject();
  public subscription:Subscription;

  ngOnInit(){
    const debounceClick=500;

    this.click.pipe(debounceTime(debounceClick))
    .subscribe((value:any)=>{
      this.debounceClick.emit(value);
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  constructor() { }

  @HostListener('click',['$event'])
  public clickEvent(event:any):void{
    event.preventDefault();
    event.stopPropagation();
    this.click.next();
  }
}
