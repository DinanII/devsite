import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasecontainerComponent } from './basecontainer.component';

describe('BasecontainerComponent', () => {
  let component: BasecontainerComponent;
  let fixture: ComponentFixture<BasecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasecontainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
