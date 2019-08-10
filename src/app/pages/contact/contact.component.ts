import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { Contact, ContactService } from './contact.service';

@Component({
    selector:'app-contact',
    templateUrl:'./contact.component.html',
    styleUrls: [ './contact.component.css' ]
})

export class ContactComponent implements OnInit {

    contact: Contact;
    from:string;
    subject:string;
    message:string;
    imagePath: string;
    clickMessage = '';

    constructor(private service:ContactService) {
        this.imagePath = '/assets/images/email.png';
    }

    onClickMe() {
        this.clickMessage = "You are my hero!";
    }

    sendClick() {
        this.contact = new Contact(this.from, this.subject, this.message);
        this.service.sendMail(this.contact);
        console.log(this.from);
        this.from = '';
        this.subject = '';
        this.message = '';
        alert('Your email has been sent!');
    }

    testCall() {
        this.service.testCall();
    }

    ngOnInit(){}
}