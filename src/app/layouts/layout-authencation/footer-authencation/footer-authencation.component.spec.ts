import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAuthencationComponent } from './footer-authencation.component';

describe('FooterAuthencationComponent', () => {
  let component: FooterAuthencationComponent;
  let fixture: ComponentFixture<FooterAuthencationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAuthencationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAuthencationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
