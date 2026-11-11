import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-currently',
  imports: [ScrollRevealDirective],
  templateUrl: './currently.html',
  styleUrl: './currently.css',
})
export class Currently {}
