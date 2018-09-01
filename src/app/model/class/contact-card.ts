import { ICard } from '../interface/ICard';

export class ContactCard implements ICard {
    name:string;
    contactNo:string;

    constructor (name, contactNo) {
        this.name = name;
        this.contactNo = contactNo;        
    }

    get Name() {
        return this.name;
    }

    set Name(name) {
        this.name = name;
    }

    get ContactNo() {
        return this.contactNo;
    }

    set ContactNo(contactNo) {
        this.contactNo = contactNo;
    }
}