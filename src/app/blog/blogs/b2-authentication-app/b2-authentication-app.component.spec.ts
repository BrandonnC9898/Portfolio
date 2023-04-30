import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2AuthenticationAppComponent } from './b2-authentication-app.component';

describe('B2AuthenticationAppComponent', () => {
  let component: B2AuthenticationAppComponent;
  let fixture: ComponentFixture<B2AuthenticationAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2AuthenticationAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B2AuthenticationAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
