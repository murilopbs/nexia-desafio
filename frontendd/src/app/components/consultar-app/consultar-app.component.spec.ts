import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAppComponent } from './consultar-app.component';

describe('ConsultarAppComponent', () => {
  let component: ConsultarAppComponent;
  let fixture: ComponentFixture<ConsultarAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
