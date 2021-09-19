import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppRipple]'
})
export class AppRippleDirective {

  @Input() public appRipple='ripple';

  constructor(public elementRef:ElementRef,public renderer:Renderer2) { }

  @HostListener('mouseenter') onHover(){
    this.renderer.addClass(this.elementRef.nativeElement,this.appRipple);
  }
}
