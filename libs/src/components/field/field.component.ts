import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldConfig, FieldType, LabelPosition } from './field.model';
import { HeaderComponent } from '../../widgets/header/header.component';
import { InputComponent } from '../../widgets/input/input.component';
import {
  HeaderConfig,
  HeaderFontSize,
} from '../../widgets/header/header.model';
import { TextareaComponent } from '../../widgets/textarea/textarea.component';
import { InputConfig } from '../../widgets/input/input.model';
import { TextAreaConfig } from '../../widgets/textarea/textarea.model';

@Component({
  selector: 'sff-field',
  standalone: true,
  imports: [CommonModule, HeaderComponent, InputComponent, TextareaComponent],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss',
})
export class FieldComponent implements OnInit {
  @Input() config: FieldConfig | undefined;

  labelConfig: HeaderConfig | undefined;
  labelPosition = LabelPosition;
  fieldType = FieldType;
  childConfig: InputConfig | TextAreaConfig | undefined;
  customStyling: object | undefined;

  ngOnInit() {
    if (!this.config) return;
    this.labelConfig = {
      size: HeaderFontSize.Small,
      content: this.config.label,
    };
    this.childConfig = {
      isInternalLabel: this.config?.labelPosition === LabelPosition.Internal,
    };
  }

  onFocus() {
    console.log('Focus')
    this.customStyling = {
      outline: '1px solid black',
    };
  }
  
  onBlur() {
    console.log('Blur')
    this.customStyling = {
      outline: 'none',
    };
  }
}
