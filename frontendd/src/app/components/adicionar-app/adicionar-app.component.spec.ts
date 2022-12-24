import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAppComponent } from './adicionar-app.component';

describe('AdicionarAppComponent', () => {
  let component: AdicionarAppComponent;
  let fixture: ComponentFixture<AdicionarAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
