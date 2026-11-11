import { Component } from '@angular/core';
import { CAPABILITY } from '../../../../core/data/capability.data';

@Component({
  selector: 'app-what-i-build',
  imports: [],
  templateUrl: './what-i-build.html',
  styleUrl: './what-i-build.css',
})
export class WhatIBuild {
  readonly capabilities = CAPABILITY;
}
