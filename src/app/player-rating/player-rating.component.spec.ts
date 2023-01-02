import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRatingComponent } from './player-rating.component';

describe('PlayerRatingComponent', () => {
  let component: PlayerRatingComponent;
  let fixture: ComponentFixture<PlayerRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
