import { Component, OnInit } from '@angular/core';
import { ContactCard } from '../model/class/contact-card';
import { ContactsService } from '../service/contacts.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  contactCards: ContactCard[] = [];
  query: string;
  colorsMap: object = {};

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.populateRandomColor();
    this.getCards();
    this.contactsService.currentSearch.subscribe(query => this.query = query);
  }

  getCards(): void {
    this.contactsService.getContacts()
    .subscribe(contactCards => this.contactCards = contactCards);
  }

  populateRandomColor(): void {
    var letters = '012345'.split('');
    var color = '#'; 
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');       
    color += letters[Math.round(Math.random() * 5)];
    letters = '0123456789ABCDEF'.split('');
    for (let i = 0; i < alphabet.length; i++){
      for (let j = 0; j < 6; j++) {
        color += letters[Math.round(Math.random() * 15)];
      }
      this.colorsMap[alphabet[i]] = color;
      color = '#';
    }    
  } 

  public setStyles(card): any {
    if (card.name){
      return {            
        'background-color': this.colorsMap[card.name[0].toLowerCase()]
      }
    }
  }

}
