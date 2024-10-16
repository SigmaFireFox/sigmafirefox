import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldConfig, FieldType } from './field.model';
import { HeaderComponent } from '../../widgets/header/header.component';
import { InputComponent } from '../../widgets/input/input.component';
import {
  HeaderConfig,
  HeaderFontSize,
} from '../../widgets/header/header.model';
import { TextareaComponent } from '../../widgets/textarea/textarea.component';

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
  fieldType = FieldType;

  ngOnInit() {
    console.log(this.config);
    if (!this.config) return;
    this.labelConfig = {
      size: HeaderFontSize.Small,
      content: this.config.label,
    };
  }
}
