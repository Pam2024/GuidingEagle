import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageListPageComponent } from './package-list-page.component';

describe('PackageListPageComponent', () => {
  let component: PackageListPageComponent;
  let fixture: ComponentFixture<PackageListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackageListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
