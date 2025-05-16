import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDCComponent } from './header-dc.component';

describe('HeaderDCComponent', () => {
  let component: HeaderDCComponent;
  let fixture: ComponentFixture<HeaderDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
