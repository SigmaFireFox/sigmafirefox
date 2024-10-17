import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaConfig } from './textarea.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sff-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent implements OnInit {
  @Input() config: TextAreaConfig | undefined;
  @Output() focusEvent: EventEmitter<void> = new EventEmitter();
  @Output() blurEvent: EventEmitter<string> = new EventEmitter();

  value = '';

  ngOnInit() {
    if (!this.config) return;
    if (this.config.placeholder) this.value = this.config.placeholder;
  }

  onFocus() {
    this.focusEvent.emit();
  }

  onBlur() {
    this.blurEvent.emit(this.value);
  }
}
