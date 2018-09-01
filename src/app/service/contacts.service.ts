import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// import { ICard } from '../model/interface/ICard';
import { ContactCard } from '../model/class/contact-card';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactsUrl = 'http://localhost:3000/contacts';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET Contacts from the server */
  getContacts (): Observable<ContactCard[]> {
    return this.http.get<ContactCard[]>(this.contactsUrl)
      .pipe(
        tap(heroes => console.log('fetched contacts')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
