import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

export class Contact {
    constructor(public from:string, public subject:string, public body:string) {}
}


@Injectable()
export class ContactService {
    
    constructor(private http:Http) {

    }

    // from:string, subject:string, body:string
    sendMail(contact: Contact) {
        var baseUrl = 'http://mailapi.sbonchev.eu/api/mail';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let fromBody = JSON.stringify(contact);

        var responseText = "";

        this.http.post(baseUrl, fromBody, options)
        .subscribe();
    }

    testCall() {
        var baseUrl = 'http://mailapi.sbonchev.eu/api/mail';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let text = "";

        this.http.get(baseUrl)
        .map((res:Response) => res.text())
        .subscribe(data => { text = data; console.log(text); });
    }
}