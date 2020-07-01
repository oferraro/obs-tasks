import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AModalComponent } from './a-modal.component';

describe('AModalComponent', () => {
  let component: AModalComponent;
  let fixture: ComponentFixture<AModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
