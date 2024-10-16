import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaConfig } from './textarea.model';

@Component({
  selector: 'sff-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  @Input() config: TextAreaConfig | undefined;
  @Output() focusEvent: EventEmitter<void> = new EventEmitter();
  @Output() blurEvent: EventEmitter<void> = new EventEmitter();

  onFocus() {
    this.focusEvent.emit()
  }

  onBlur() {
    this.blurEvent.emit()
  }

}
