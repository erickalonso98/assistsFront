import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRolesPage } from './list-roles.page';

describe('ListRolesPage', () => {
  let component: ListRolesPage;
  let fixture: ComponentFixture<ListRolesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
