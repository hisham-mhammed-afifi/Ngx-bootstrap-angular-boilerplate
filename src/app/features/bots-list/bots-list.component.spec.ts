import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotsListComponent } from './bots-list.component';

describe('BotsListComponent', () => {
  let component: BotsListComponent;
  let fixture: ComponentFixture<BotsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
