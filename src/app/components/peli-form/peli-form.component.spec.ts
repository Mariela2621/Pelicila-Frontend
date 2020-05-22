import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliFormComponent } from './peli-form.component';

describe('PeliFormComponent', () => {
  let component: PeliFormComponent;
  let fixture: ComponentFixture<PeliFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
