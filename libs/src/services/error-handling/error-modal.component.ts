import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sff-error-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.scss',
})
export class ErrorModalComponent {}
