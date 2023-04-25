import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1LoadBalancerComponent } from './b1-load-balancer.component';

describe('B1LoadBalancerComponent', () => {
  let component: B1LoadBalancerComponent;
  let fixture: ComponentFixture<B1LoadBalancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1LoadBalancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B1LoadBalancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
