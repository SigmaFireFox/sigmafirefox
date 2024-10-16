import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldConfig } from './field.model';
import { HeaderComponent } from '../../widgets/header/header.component';
import { InputComponent } from '../../widgets/input/input.component';
import { HeaderConfig, HeaderFontSize } from '../../widgets/header/header.model';

@Component({
  selector: 'sff-field',
  standalone: true,
  imports: [CommonModule, HeaderComponent, InputComponent],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss',
})
export class FieldComponent implements OnInit {
  @Input() config: FieldConfig | undefined;

  labelConfig: HeaderConfig | undefined

  ngOnInit(){
    if (!this.config) return
    this.labelConfig = {
      size: HeaderFontSize.Small,
      content: this.config.label
    } 
  }

}
