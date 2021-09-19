import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesMainComponent } from './pipes-main.component';

describe('PipesMainComponent', () => {
  let component: PipesMainComponent;
  let fixture: ComponentFixture<PipesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
