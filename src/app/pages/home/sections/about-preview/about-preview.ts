import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about-preview',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './about-preview.html',
  styleUrl: './about-preview.css',
})
export class AboutPreview {
  readonly ArrowRight = ArrowRight
}
