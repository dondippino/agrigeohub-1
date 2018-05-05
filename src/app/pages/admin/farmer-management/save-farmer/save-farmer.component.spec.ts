import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFarmerComponent } from './save-farmer.component';

describe('SaveFarmerComponent', () => {
  let component: SaveFarmerComponent;
  let fixture: ComponentFixture<SaveFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
