import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdGridListModule, MdProgressBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RouteModule } from './route.module';

import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/notfound/page-not-found.component';

import { ContactService } from './pages/contact/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    PageNotFoundComponent,
    //Contact
  ],
  imports: [
    BrowserModule,
    RouteModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdProgressBarModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
