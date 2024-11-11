import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfig, ModalContentType } from './modal.model';
import { StarRaterComponent } from '../../components/star-rater/star-rater.component';
import { IconComponent } from '../../widgets/icon/icon.component';
import { HeaderComponent } from '../../widgets/header/header.component';
import { ContentComponent } from '../../widgets/content/content.component';
import { FormComponent } from '../../components/form/form.component';
import { FormGroup } from '@angular/forms';
import { ButtonComponent } from "../../widgets/button/button.component";
import { ButtonConfig } from '../../widgets/button/button.model';

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
    ButtonComponent
],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  @Input() config: ModalConfig | undefined;
  @Output() formSubmitted: EventEmitter<FormGroup> = new EventEmitter();
  @Output() buttonClicked: EventEmitter<ButtonConfig> = new EventEmitter();

  modalContentType = ModalContentType;
  customModalPositioning: { [key: string]: string } = {
    'justify-content': 'start',
    'align-items': 'start',
  };
  customModalCardSizing: { [key: string]: string } = {}
  customModalContentStyling: { [key: string]: string } = {}

  ngOnInit() {
    if (!this.config) return;
    // Setting of position
    this.customModalPositioning = {
      'justify-content': this.config.horizontalAlignment,
      'align-items': this.config.verticalAlignment,
    };
    // Setting up alignment
    if (this.config.isOnlyInfo) {
      this.customModalContentStyling = {
        'display': 'flex',
        'justify-content': 'center',
        'text-align': 'center',
      }
      this.customModalCardSizing = {
        'width': '24rem'
      }
    }
  }

  onFormSubmitted(form: FormGroup) {
    this.formSubmitted.emit(form);
  }

  onButtonClicked(buttonConfig: ButtonConfig) {
    this.buttonClicked.emit(buttonConfig)
  }
}
