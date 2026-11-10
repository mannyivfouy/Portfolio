import { Component } from '@angular/core';
import { ContactIntro } from './sections/contact-intro/contact-intro';
import { ContactLinks } from './sections/contact-links/contact-links';

@Component({
  selector: 'app-contact',
  imports: [ContactIntro, ContactLinks],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
