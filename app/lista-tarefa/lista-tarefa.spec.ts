import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarefa } from './lista-tarefa';

describe('ListaTarefa', () => {
  let component: ListaTarefa;
  let fixture: ComponentFixture<ListaTarefa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTarefa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTarefa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
