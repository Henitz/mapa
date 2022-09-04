import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaimoveisComponent } from './mapaimoveis.component';

describe('MapaimoveisComponent', () => {
  let component: MapaimoveisComponent;
  let fixture: ComponentFixture<MapaimoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaimoveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaimoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
