import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardConfig } from './profile-card.model';
import { ContentComponent } from '../../widgets/content/content.component';
import { ContentConfig, ContentFontSize } from '../../widgets/content/content.model';
import { NavigationService } from '../../services/navigation/navigation.service';
import { ImageComponent } from "../../widgets/image/image.component";
import { ImageConfig } from '../../widgets/image/image.model';
import { IconConfig, IconSize } from '../../widgets/icon/icon.model';
import { IconComponent } from "../../widgets/icon/icon.component";

@Component({
  selector: 'sff-profile-card',
  standalone: true,
  imports: [CommonModule, ContentComponent, ImageComponent, IconComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent implements OnInit {
  @Input() config: ProfileCardConfig | undefined;

  contentConfig: ContentConfig | undefined
  profilePicConfig: ImageConfig | undefined
  profilePicIconConfig: IconConfig = {
    size: IconSize.Medium,
    name: 'person'
  }
  constructor(private navService: NavigationService) {}

  ngOnInit(){
    if (!this.config) return
    this.contentConfig = {
      size: ContentFontSize.Small,
      content: [`${this.config.firstName} ${this.config.lastName}`, this.config.emailAddress]
    }
    if (!this.config.profilePicUrl) return
    this.profilePicConfig = {
      url: this.config.profilePicUrl,
      alt: 'profile-pic',
      height: '2rem',
      width: '2rem',
      rounded: true,
    }
  }

  onProfileCardClicked(){
    if (!this.config?.clickRoute) return
    this.navService.navTo(this.config.clickRoute)
  }
}
