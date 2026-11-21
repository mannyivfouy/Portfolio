import { Component, input } from '@angular/core';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-project-detail-gallery',
  imports: [LucideAngularModule],
  templateUrl: './project-detail-gallery.html',
  styleUrl: './project-detail-gallery.css',
})
export class ProjectDetailGallery {
  screenshots = input<String[]>([]);
  selectedScreenshotIndex = 0;

  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  selectScreenshot(index: number): void {
    this.selectedScreenshotIndex = index;
  }

  previousScreenshot(): void {
    const total = this.screenshots().length;
    if (!total) return;

    this.selectedScreenshotIndex = (this.selectedScreenshotIndex - 1 + total) % total;
  }

  nextScreenshot(): void {
    const total = this.screenshots().length;
    if (!total) return;

    this.selectedScreenshotIndex = (this.selectedScreenshotIndex + 1) % total;
  }
}
