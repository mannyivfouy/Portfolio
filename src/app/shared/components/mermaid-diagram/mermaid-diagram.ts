
import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import mermaid from 'mermaid';

// NEW: Shared variables for all Mermaid component instances.
let mermaidInitialized = false;
let nextDiagramId = 0;

// NEW: Initialize Mermaid only once.
function initializeMermaid(): void {
  if (mermaidInitialized) return;

  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    securityLevel: 'strict',
    themeVariables: {
      darkMode: true,
      background: '#111113',
      primaryColor: '#18181b',
      primaryTextColor: '#fafafa',
      primaryBorderColor: '#52525b',
      secondaryColor: '#1e1b4b',
      secondaryTextColor: '#e4e4e7',
      secondaryBorderColor: '#6366f1',
      tertiaryColor: '#18181b',
      tertiaryTextColor: '#d4d4d8',
      tertiaryBorderColor: '#3f3f46',
      lineColor: '#71717a',
      textColor: '#fafafa',
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
    },
    flowchart: {
      curve: 'basis',
      nodeSpacing: 50,
      rankSpacing: 65,
      padding: 18,
      htmlLabels: true,
    },
    er: {
      fontSize: 13,
      useMaxWidth: false,
    },
  });

  mermaidInitialized = true;
}

@Component({
  selector: 'app-mermaid-diagram',
  imports: [],
  templateUrl: './mermaid-diagram.html',
  styleUrl: './mermaid-diagram.css',
})
export class MermaidDiagram implements AfterViewInit, OnChanges {
  @ViewChild('diagramContainer')
  diagramContainer!: ElementRef<HTMLDivElement>;

  diagram = input.required<string>();

  private viewReady = false;
  private renderVersion = 0;

  ngAfterViewInit(): void {
    initializeMermaid();

    this.viewReady = true;
    void this.renderDiagram();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // CHANGED: The input name is "diagram", not "source".
    if (changes['diagram'] && this.viewReady) {
      void this.renderDiagram();
    }
  }

  private async renderDiagram(): Promise<void> {
    const container = this.diagramContainer?.nativeElement;

    if (!container) return;

    const currentVersion = ++this.renderVersion;

    // CHANGED: Unique ID shared across all component instances.
    const id = `mermaid-diagram-${++nextDiagramId}`;

    try {
      const { svg, bindFunctions } = await mermaid.render(
        id,
        this.diagram(),
      );

      // Ignore outdated rendering results.
      if (currentVersion !== this.renderVersion) return;

      container.innerHTML = svg;
      bindFunctions?.(container);
    } catch (error) {
      if (currentVersion !== this.renderVersion) return;

      console.error('Mermaid rendering failed:', error);
      container.textContent = 'Unable to render diagram.';
    }
  }
}
