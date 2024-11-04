import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ModalConfig,
  ModalContentType,
  ModalHorizontalAlignment,
} from './modal.model';
import { StarRaterComponent } from '../../components/star-rater/star-rater.component';
import { IconComponent } from '../../widgets/icon/icon.component';
import { HeaderComponent } from '../../widgets/header/header.component';
import { ContentComponent } from '../../widgets/content/content.component';
import { FormComponent } from '../../components/form/form.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sff-modal',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    HeaderComponent,
    ContentComponent,
    StarRaterComponent,
    FormComponent,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  @Input() config: ModalConfig | undefined;
  @Output() formSubmitted: EventEmitter<FormGroup> = new EventEmitter();

  modalContentType = ModalContentType;
  customModalPositioning: { [key: string]: string } = {  
    'justify-content': 'start',
    'align-items': 'start',
  };

  ngOnInit() {
    if (!this.config) return;
    // Setting of position
    switch (this.config.horizontalAlignment) {
      case ModalHorizontalAlignment.Left: {
        break;
      }
      case ModalHorizontalAlignment.CenterLeft: {
        break;
      }
      case ModalHorizontalAlignment.Center: {
        break;
      }
      case ModalHorizontalAlignment.CenterRight: {
        break;
      }
      case ModalHorizontalAlignment.Right: {
        break;
      }
    }
    console.log('');
  }

  onFormSubmitted(form: FormGroup) {
    this.formSubmitted.emit(form);
  }
}
