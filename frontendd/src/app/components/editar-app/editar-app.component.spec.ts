import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAppComponent } from './editar-app.component';

describe('EditarAppComponent', () => {
  let component: EditarAppComponent;
  let fixture: ComponentFixture<EditarAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
