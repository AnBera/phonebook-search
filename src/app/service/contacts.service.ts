import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';
import { ContactCard } from '../model/class/contact-card';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactsUrl = 'http://localhost:3000/contacts';  // To do move it to constants
  private searchText = (new BehaviorSubject<string>(''));
  currentSearch = this.searchText.asObservable();

  constructor(private http: HttpClient) { }

  getContacts (): Observable<ContactCard[]> {
    return this.http.get<ContactCard[]>(this.contactsUrl)    
      .pipe(
        map(res => {
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
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
