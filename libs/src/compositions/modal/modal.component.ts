import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfig, ModalContentType } from './modal.model';
import { StarRaterComponent } from '../../components/star-rater/star-rater.component';
import { IconComponent } from '../../widgets/icon/icon.component';
import { HeaderComponent } from '../../widgets/header/header.component';
import { ContentComponent } from '../../widgets/content/content.component';
import { FormComponent } from "../../components/form/form.component";

@Component({
  selector: 'sff-modal',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    HeaderComponent,
    ContentComponent,
    StarRaterComponent,
    FormComponent
],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() config: ModalConfig | undefined;

  modalContentType = ModalContentType;
}
