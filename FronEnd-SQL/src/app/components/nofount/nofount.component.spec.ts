import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NofountComponent } from './nofount.component';

describe('NofountComponent', () => {
  let component: NofountComponent;
  let fixture: ComponentFixture<NofountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NofountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NofountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
