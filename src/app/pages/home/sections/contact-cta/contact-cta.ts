import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact-cta',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './contact-cta.html',
  styleUrl: './contact-cta.css',
})
export class ContactCta {
  readonly ArrowRight = ArrowRight
}
