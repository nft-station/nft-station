import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutUnauthencationComponent } from './layout-unauthencation.component';

describe('LayoutUnauthencationComponent', () => {
  let component: LayoutUnauthencationComponent;
  let fixture: ComponentFixture<LayoutUnauthencationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutUnauthencationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutUnauthencationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
