import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScremerComponent } from './scremer.component';

describe('ScremerComponent', () => {
  let component: ScremerComponent;
  let fixture: ComponentFixture<ScremerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScremerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScremerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
