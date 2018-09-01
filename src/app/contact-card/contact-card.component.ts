import { Component, OnInit } from '@angular/core';
import { ContactCard } from '../model/class/contact-card';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  contactCards: ContactCard[] = [];

  constructor() { }

  ngOnInit() {
    this.contactCards = [new ContactCard('Anirban', 9883223453),
                        new ContactCard('Murali', 9862635475)];
  }

}
