import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaPersonComponent } from './crea-person.component';

describe('CreaPersonComponent', () => {
  let component: CreaPersonComponent;
  let fixture: ComponentFixture<CreaPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
