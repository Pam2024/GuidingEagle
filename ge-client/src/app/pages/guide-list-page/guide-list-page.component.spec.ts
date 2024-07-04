import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideListPageComponent } from './guide-list-page.component';

describe('GuideListPageComponent', () => {
  let component: GuideListPageComponent;
  let fixture: ComponentFixture<GuideListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuideListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
