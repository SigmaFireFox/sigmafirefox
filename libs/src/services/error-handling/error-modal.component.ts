import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlingService } from './error-handling.service';
import {
  ModalConfig,
  ModalContentType,
  HorizontalAlignment,
  ModalSize,
  VerticalAlignment,
} from '../../compositions/modal/modal.model';
import { ModalComponent } from '../../compositions/modal/modal.component';
import { HeaderFontSize } from '../../widgets/header/header.model';
import { ContentFontSize } from '../../widgets/content/content.model';
import { FormButtonAlignment } from '../../components/form/form.model';
import { ButtonSize, ButtonType } from '../../widgets/button/button.model';

@Component({
  selector: 'sff-error-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './error-modal.component.html',
})
export class ErrorModalComponent implements OnInit {
  modalConfig: ModalConfig = {
    size: ModalSize.Medium,
    isOnlyInfo: true,
    content: [],
    horizontalAlignment: HorizontalAlignment.Center,
    verticalAlignment: VerticalAlignment.Center,
  };

  showModal = false;

  constructor(private errorService: ErrorHandlingService) {}

  ngOnInit() {
    this.errorService.errorModalConfig.subscribe((config) => {
      this.modalConfig.content = []
      this.modalConfig.content.push(
        {
          type: ModalContentType.Header,
          headerConfig: {
            size: HeaderFontSize.Medium,
            content: config.heading,
          },
        },
        {
          type: ModalContentType.Content,
          contentConfig: {
            size: ContentFontSize.Medium,
            content: config.content,
          },
        },
        {
          type: ModalContentType.Form,
          formConfig: {
            fields: [],
            buttons: [
              {
                config: {
                  name: 'close',
                  text: 'Close',
                  type: ButtonType.Primary,
                  size: ButtonSize.CTA_Small,
                },
                alignment: FormButtonAlignment.Centre,
                isSubmit: true,
              },
            ],
          },
        }
      );
      this.showModal = true;
    });
  }
}
