import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputConfig } from './input.model';

@Component({
  selector: 'sff-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() config: InputConfig | undefined;
  @Output() focusEvent: EventEmitter<void> = new EventEmitter();
  @Output() blurEvent: EventEmitter<void> = new EventEmitter();

  onFocus() {
    this.focusEvent.emit()
  }

  onBlur() {
    this.blurEvent.emit()
  }
}
