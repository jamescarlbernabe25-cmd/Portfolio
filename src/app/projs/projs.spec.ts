import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projs } from './projs';

describe('Projs', () => {
  let component: Projs;
  let fixture: ComponentFixture<Projs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
