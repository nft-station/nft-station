import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAuthencationComponent } from './layout-authencation.component';

describe('LayoutAuthencationComponent', () => {
  let component: LayoutAuthencationComponent;
  let fixture: ComponentFixture<LayoutAuthencationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutAuthencationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutAuthencationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
