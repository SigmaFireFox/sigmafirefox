import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputConfig } from './input.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sff-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  @Input() config: InputConfig | undefined;
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
