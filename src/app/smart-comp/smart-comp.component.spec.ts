import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCompComponent } from './smart-comp.component';

describe('SmartCompComponent', () => {
  let component: SmartCompComponent;
  let fixture: ComponentFixture<SmartCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartCompComponent]
    });
    fixture = TestBed.createComponent(SmartCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
