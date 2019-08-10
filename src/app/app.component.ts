import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stoyan Bonchev';
  linkedInIcon: string;
  githubIcon: string;
  certBadgePath: string;

  constructor() {
    this.linkedInIcon = '/assets/images/linkedin.png';
    this.githubIcon = '/assets/images/github.png';
    this.certBadgePath = '/assets/images/psd1-large.png';
  }
}
