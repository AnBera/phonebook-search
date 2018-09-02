import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContactCardComponent } from './contact-card.component';
import { MaterialModule } from '../material.module';
import { FilterPipe } from '../pipe/filter.pipe';

describe('ContactCardComponent', () => {
  let component: ContactCardComponent;
  let fixture: ComponentFixture<ContactCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, HttpClientTestingModule ],
      declarations: [ ContactCardComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate random color for alphabet', async(() => {
    component.populateRandomColor();
    console.log(component.colorsMap['a']);
    expect(component.colorsMap['a']).toBeDefined();
  }  ));

});
