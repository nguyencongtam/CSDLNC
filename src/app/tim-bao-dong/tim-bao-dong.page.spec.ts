import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimBaoDongPage } from './tim-bao-dong.page';

describe('TimBaoDongPage', () => {
  let component: TimBaoDongPage;
  let fixture: ComponentFixture<TimBaoDongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimBaoDongPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimBaoDongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
