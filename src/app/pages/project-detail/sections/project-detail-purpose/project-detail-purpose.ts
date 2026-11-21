import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-detail-purpose',
  imports: [],
  templateUrl: './project-detail-purpose.html',
  styleUrl: './project-detail-purpose.css',
})
export class ProjectDetailPurpose {
  purpose = input.required<string>()
}
