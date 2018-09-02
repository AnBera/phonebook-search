import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';

// import { ICard } from '../model/interface/ICard';
import { ContactCard } from '../model/class/contact-card';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactsUrl = 'http://localhost:3000/contacts';  // URL to web api
  private searchText = (new BehaviorSubject<string>(''));
  currentSearch = this.searchText.asObservable();

  constructor(private http: HttpClient) { }

  /** GET Contacts from the server */
  getContacts (): Observable<ContactCard[]> {
    return this.http.get<ContactCard[]>(this.contactsUrl)    
      .pipe(
        map(res => {
          // var ret = <ContactCard[]>res.json();
          res.sort((a,b) => a.name < b.name ? -1 : 1);
          return res;
      } ),
        tap(heroes => console.log('fetched contacts')),
        catchError(this.handleError('getContacts', []))
      );
  }

  changeSearchQuery(query: string) {
    this.searchText.next(query);
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
