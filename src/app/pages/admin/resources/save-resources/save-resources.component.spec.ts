import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveResourcesComponent } from './save-resources.component';

describe('SaveResourcesComponent', () => {
  let component: SaveResourcesComponent;
  let fixture: ComponentFixture<SaveResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
