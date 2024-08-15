import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabithComponent } from './fabith.component';

describe('FabithComponent', () => {
  let component: FabithComponent;
  let fixture: ComponentFixture<FabithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabithComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
