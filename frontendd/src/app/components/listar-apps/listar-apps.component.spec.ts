import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAppsComponent } from './listar-apps.component';

describe('ListarAppsComponent', () => {
  let component: ListarAppsComponent;
  let fixture: ComponentFixture<ListarAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
