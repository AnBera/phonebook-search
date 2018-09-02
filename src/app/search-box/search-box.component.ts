import { Component, OnInit } from '@angular/core';
import { ContactCard } from './../model/class/contact-card';
import { ContactsService } from './../service/contacts.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  query: string;
  searchText: string;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.currentSearch.subscribe(query => this.query = query);
  }
  onChange() {
    this.contactsService.changeSearchQuery(this.searchText);
  }

}
