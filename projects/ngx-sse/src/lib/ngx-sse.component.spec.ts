import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSseComponent } from './ngx-sse.component';

describe('NgxSseComponent', () => {
  let component: NgxSseComponent;
  let fixture: ComponentFixture<NgxSseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
