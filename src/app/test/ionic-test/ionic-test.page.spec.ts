import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicTestPage } from './ionic-test.page';

describe('IonicTestPage', () => {
  let component: IonicTestPage;
  let fixture: ComponentFixture<IonicTestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IonicTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
