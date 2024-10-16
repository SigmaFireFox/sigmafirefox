import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonConfig, ButtonSize, ButtonType } from './button.model';

@Component({
  selector: 'sff-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit{
  @Input() config: ButtonConfig | undefined;

  buttonType = ButtonType
  buttonSize = ButtonSize

  customStyling: object | undefined

  ngOnInit(){
    if (!this.config) return
    let width = ''
    switch (this.config.size) {
      case ButtonSize.Small: {
        width = '7.5rem'
        break
      }
      case ButtonSize.Medium: {
        width = '15rem'
        break
      }
      case ButtonSize.Large: {
        width = '98%'
      }
    }

    this.customStyling = {
      'width': width,
    }
  }
}
