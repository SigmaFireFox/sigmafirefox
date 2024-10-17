import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormButton, FormConfig, FormField } from './form.model';
import { FieldComponent } from '../field/field.component';
import { ButtonComponent } from '../../widgets/button/button.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'


@Component({
  selector: 'sff-form',
  standalone: true,
  imports: [CommonModule, FieldComponent, ButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit{
  @Input() config: FormConfig | undefined;
  @Output() formSubmitted: EventEmitter<FormGroup> = new EventEmitter();


  form: FormGroup | undefined

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    if (!this.config) return
    this.form = this.formBuilder.group({})
    for (const field of this.config.fields) {
      this.form.addControl(field.name, new FormControl(''))
    }
  }

  onFieldValueUpdate(field: FormField, value: string){
    if (!this.form) return
    this.form.controls[field.name].setValue(value)
  }

  onButtonClicked(button: FormButton){
    if (button.isSubmit && this.form) {
      this.formSubmitted.emit(this.form)
    }

  }
}
