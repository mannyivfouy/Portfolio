import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Github, Linkedin, LucideAngularModule, Mail } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly Github = Github
  readonly Linkedin = Linkedin
  readonly Mail = Mail
}
