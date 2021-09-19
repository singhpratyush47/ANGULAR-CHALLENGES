import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesMainComponent } from './pipes-main/pipes-main.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';
import { FlattenArrayPipe } from './flatten-array.pipe';



@NgModule({
  declarations: [PipesMainComponent, CreditCardFormatterPipe, FlattenArrayPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(PIPES_ROUTES)
  ]
})
export class PipesModule { }
