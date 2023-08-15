import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationPriceComponent } from './automation-price.component';

describe('AutomationPriceComponent', () => {
  let component: AutomationPriceComponent;
  let fixture: ComponentFixture<AutomationPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomationPriceComponent]
    });
    fixture = TestBed.createComponent(AutomationPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
