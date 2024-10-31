import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../widgets/image/image.component';
import { CtaBannerConfig } from './cta-banner.model';
import { HeaderComponent } from '../../widgets/header/header.component';
import { ButtonComponent } from '../../widgets/button/button.component';
import { ContentComponent } from '../../widgets/content/content.component';
import { ButtonConfig } from '../../widgets/button/button.model';

@Component({
  selector: 'sff-cta-banner',
  standalone: true,
  imports: [CommonModule, ImageComponent, HeaderComponent, ContentComponent, ButtonComponent],
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss',
})
export class CtaBannerComponent implements OnInit {
  @Input() config: CtaBannerConfig | undefined;
  @Output() buttonClicked: EventEmitter<ButtonConfig> = new EventEmitter();

  customStyling: { [key: string]: string } = {};

  ngOnInit(){
    if (!this.config) return
    this.config.image.width = '100%'
    this.config.image.height = this.config.image.height || '240px'
    this.config.image.rounded = true
    this.customStyling['left'] = this.config.contentLeft
  }

  onButtonClicked(button: ButtonConfig){
    this.buttonClicked.emit(button)
  }
}
