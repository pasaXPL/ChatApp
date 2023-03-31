import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginframeComponent } from './loginframe.component';

describe('LoginframeComponent', () => {
  let component: LoginframeComponent;
  let fixture: ComponentFixture<LoginframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
