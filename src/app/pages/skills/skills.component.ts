import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    selector:'app-skills',
    templateUrl:'./skills.component.html',
    styleUrls: [ './skills.component.css' ]
})

export class SkillsComponent implements OnInit {

    meImagePath: string;

    dotNetSkills: any;
    databaseSkills: any;
    javaSkills: any;
    webtechSkills: any;
    mobiledevSkills: any;
    otherSkills: any;
    constructor(private http:Http)
    {
        this.http.get('/assets/data/dotnet.json')
            .subscribe(res => this.dotNetSkills = res.json());
        this.http.get('/assets/data/databases.json')
            .subscribe(res => this.databaseSkills = res.json());
        this.http.get('/assets/data/java.json')
            .subscribe(res => this.javaSkills = res.json());
        this.http.get('/assets/data/webtech.json')
            .subscribe(res => this.webtechSkills = res.json());
        this.http.get('/assets/data/mobiledev.json')
            .subscribe(res => this.mobiledevSkills = res.json());
        this.http.get('/assets/data/other.json')
            .subscribe(res => this.otherSkills = res.json());
    }

    ngOnInit(){}
}