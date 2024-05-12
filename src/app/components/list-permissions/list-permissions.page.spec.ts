import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPermissionsPage } from './list-permissions.page';

describe('ListPermissionsPage', () => {
  let component: ListPermissionsPage;
  let fixture: ComponentFixture<ListPermissionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPermissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
