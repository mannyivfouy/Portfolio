import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowLeft, FolderSearch, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-not-found',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  readonly FolderSearch = FolderSearch
  readonly ArrowLeft = ArrowLeft
}
