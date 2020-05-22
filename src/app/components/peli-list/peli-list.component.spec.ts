import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliListComponent } from './peli-list.component';

describe('PeliListComponent', () => {
  let component: PeliListComponent;
  let fixture: ComponentFixture<PeliListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
