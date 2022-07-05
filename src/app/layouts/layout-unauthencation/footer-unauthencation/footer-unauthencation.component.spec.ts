import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUnauthencationComponent } from './footer-unauthencation.component';

describe('FooterUnauthencationComponent', () => {
  let component: FooterUnauthencationComponent;
  let fixture: ComponentFixture<FooterUnauthencationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterUnauthencationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterUnauthencationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
