import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadWriteDataComponent } from './read-write-data.component';

describe('ReadWriteDataComponent', () => {
  let component: ReadWriteDataComponent;
  let fixture: ComponentFixture<ReadWriteDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadWriteDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadWriteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
