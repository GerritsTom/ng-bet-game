import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielregelnComponent } from './spielregeln.component';

describe('SpielregelnComponent', () => {
  let component: SpielregelnComponent;
  let fixture: ComponentFixture<SpielregelnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpielregelnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielregelnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
