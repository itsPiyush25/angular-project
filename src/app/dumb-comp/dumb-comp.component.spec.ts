import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbCompComponent } from './dumb-comp.component';

describe('DumbCompComponent', () => {
  let component: DumbCompComponent;
  let fixture: ComponentFixture<DumbCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DumbCompComponent]
    });
    fixture = TestBed.createComponent(DumbCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
