import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonajaxComponent } from './botonajax.component';

describe('BotonajaxComponent', () => {
  let component: BotonajaxComponent;
  let fixture: ComponentFixture<BotonajaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonajaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonajaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
