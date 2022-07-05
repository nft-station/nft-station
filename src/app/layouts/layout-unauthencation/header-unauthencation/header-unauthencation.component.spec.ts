import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUnauthencationComponent } from './header-unauthencation.component';

describe('HeaderUnauthencationComponent', () => {
  let component: HeaderUnauthencationComponent;
  let fixture: ComponentFixture<HeaderUnauthencationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUnauthencationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUnauthencationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
