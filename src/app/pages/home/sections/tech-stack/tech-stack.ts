import { Component } from '@angular/core';
import { TECH_STACK } from '../../../../core/data/tech-stack.data';

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css',
})
export class TechStack {
  readonly categories = TECH_STACK
}
