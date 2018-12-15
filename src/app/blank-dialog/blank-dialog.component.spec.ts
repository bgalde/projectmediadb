import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankDialogComponent } from './blank-dialog.component';

describe('BlankDialogComponent', () => {
  let component: BlankDialogComponent;
  let fixture: ComponentFixture<BlankDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
