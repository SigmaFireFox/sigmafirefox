import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardConfig, ProfileCardSize } from './profile-card.model';
import { ContentComponent } from '../../widgets/content/content.component';
import {
  ContentConfig,
  ContentFontSize,
} from '../../widgets/content/content.model';
import { NavigationService } from '../../services/navigation/navigation.service';
import { ImageComponent } from '../../widgets/image/image.component';
import { ImageConfig } from '../../widgets/image/image.model';
import { IconConfig, IconSize } from '../../widgets/icon/icon.model';
import { IconComponent } from '../../widgets/icon/icon.component';
import { HeaderComponent } from '../../widgets/header/header.component';
import {
  HeaderConfig,
  HeaderFontSize,
} from '../../widgets/header/header.model';

@Component({
  selector: 'sff-profile-card',
  standalone: true,
  imports: [
    CommonModule,
    ContentComponent,
    ImageComponent,
    IconComponent,
    HeaderComponent,
  ],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent implements OnInit {
  @Input() config: ProfileCardConfig | undefined;

  headerConfig: HeaderConfig | undefined;
  contentConfig: ContentConfig | undefined;
  profilePicConfig: ImageConfig | undefined;
  profilePicIconConfig: IconConfig = {
    size: IconSize.Medium,
    name: 'person',
  };
  profileCardSize = ProfileCardSize
  
  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.setProfileCard();
    this.setProfileCardSize();
  }

  private setProfileCard() {
    // Set to Small size
    if (!this.config) return;
    this.headerConfig = {
      size: HeaderFontSize.Small,
      content: `${this.config.firstName} ${this.config.lastName}`,
    };
    this.contentConfig = {
      size: ContentFontSize.Small,
      content: [...this.config.profileContent],
      skipMargin: true,
    };
    if (!this.config.profilePicUrl) return;
    this.profilePicConfig = {
      url: this.config.profilePicUrl,
      alt: 'profile-pic',
      height: '2rem',
      width: '2rem',
      rounded: true,
    };
  }

  private setProfileCardSize() {
    if (!this.config) return;
    switch (this.config.profileCardSize) {
      case ProfileCardSize.Medium: {
        return;
      }
      case ProfileCardSize.Large: {
        if (this.headerConfig) {
          this.headerConfig.size = HeaderFontSize.Large;
          this.headerConfig.skipMargin = true
        }
        if (this.contentConfig) {
          this.contentConfig.size = ContentFontSize.Large;
          this.contentConfig.skipMargin = false;
        }
        if (this.profilePicConfig) {
          this.profilePicConfig.height = '10rem'
          this.profilePicConfig.width = '10rem';
        }
        if (this.profilePicIconConfig) {
          this.profilePicIconConfig.size = IconSize.XXLarge}
      }
    }
  }

  onProfileCardClicked() {
    if (!this.config?.clickRoute) return;
    this.navService.navTo(this.config.clickRoute);
  }
}
