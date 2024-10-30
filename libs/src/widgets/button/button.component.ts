import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonConfig, ButtonSize, ButtonType } from './button.model';

@Component({
  selector: 'sff-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() config: ButtonConfig | undefined;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  buttonType = ButtonType;
  customStyling: object | undefined;

  ngOnInit() {
    if (!this.config) return;
    let width = '';
    let height = '';
    let margin = '';
    let radius = ''
    switch (this.config.size) {
      case ButtonSize.Small: {
        width = '7.5rem';
        break;
      }
      case ButtonSize.Medium: {
        width = '15rem';
        break;
      }
      case ButtonSize.Large: {
        width = '98%';
        margin = '1%';
        break;
      }
      case ButtonSize.CTA_Small: {
        width = '10rem';
        height = '3rem';
        radius = '1.5rem'
        break;
      }
      case ButtonSize.CTA_Medium: {
        width = '15rem';
        height = '3rem';
        radius = '1.5rem'
        break;
      }
      case ButtonSize.CTA_Large: {
        width = '98%';
        margin = '1% 0';
        height = '3rem';
        radius = '1.5rem'
        break;
      }
        }

    this.customStyling = {
      width: width,
      margin: margin,
      height: height,
      'border-radius': radius,

    };
  }

  onClick() {
    this.clicked.emit();
  }
}
