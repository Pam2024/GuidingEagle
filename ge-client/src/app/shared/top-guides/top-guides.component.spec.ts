import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGuidesComponent } from './top-guides.component';

describe('TopGuidesComponent', () => {
  let component: TopGuidesComponent;
  let fixture: ComponentFixture<TopGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopGuidesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
