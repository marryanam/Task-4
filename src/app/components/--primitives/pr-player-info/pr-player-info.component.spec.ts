import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrPlayerInfoComponent } from './pr-player-info.component';

describe('PrPlayerInfoComponent', () => {
  let component: PrPlayerInfoComponent;
  let fixture: ComponentFixture<PrPlayerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrPlayerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrPlayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
