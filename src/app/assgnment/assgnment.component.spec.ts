import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssgnmentComponent } from './assgnment.component';

describe('AssgnmentComponent', () => {
  let component: AssgnmentComponent;
  let fixture: ComponentFixture<AssgnmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssgnmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssgnmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
