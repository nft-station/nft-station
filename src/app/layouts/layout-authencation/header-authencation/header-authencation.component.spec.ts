import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAuthencationComponent } from './header-authencation.component';

describe('HeaderAuthencationComponent', () => {
  let component: HeaderAuthencationComponent;
  let fixture: ComponentFixture<HeaderAuthencationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAuthencationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAuthencationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
