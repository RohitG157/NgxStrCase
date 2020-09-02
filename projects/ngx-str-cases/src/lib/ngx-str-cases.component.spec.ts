import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStrCasesComponent } from './ngx-str-cases.component';

describe('NgxStrCasesComponent', () => {
  let component: NgxStrCasesComponent;
  let fixture: ComponentFixture<NgxStrCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStrCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStrCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
