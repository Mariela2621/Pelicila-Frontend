import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliPreviewComponent } from './peli-preview.component';

describe('PeliPreviewComponent', () => {
  let component: PeliPreviewComponent;
  let fixture: ComponentFixture<PeliPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
