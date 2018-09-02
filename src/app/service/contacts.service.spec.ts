import { TestBed, inject, async } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactsService } from './contacts.service';

describe('ContactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactsService]
    });
  });

  it('should be created', inject([ContactsService], (service: ContactsService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve all the contacts', async(inject( [ContactsService], ( ContactsService ) => {
    ContactsService.getContacts().subscribe(result => {expect(result.length).toBeGreaterThan(0)} ); 
  }  )));

  
});
