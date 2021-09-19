import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { MainComponent } from './components/main/main.component';
import { PipesMainComponent } from './pipes/pipes-main/pipes-main.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { AppRippleDirective } from './directives/app-ripple.directive';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { SortTableComponent } from './components/sort-table/sort-table.component';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordianComponent,
    MainComponent,
    ServiceDocumentationComponent,
    DirectiveDocumentationComponent,
    CreditCardInputComponent,
    DebounceClickDirective,
    AppRippleDirective,
    SimpleTableComponent,
    SortTableComponent,
    AsyncAwaitComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
