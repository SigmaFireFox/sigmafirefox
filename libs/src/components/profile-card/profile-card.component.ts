import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardConfig } from './profile-card.model';
import { ContentComponent } from '../../widgets/content/content.component';
import { ContentConfig, ContentFontSize } from '../../widgets/content/content.model';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'sff-profile-card',
  standalone: true,
  imports: [CommonModule, ContentComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent implements OnInit {
  @Input() config: ProfileCardConfig | undefined;

  contentConfig: ContentConfig | undefined

  constructor(private navService: NavigationService) {}

  ngOnInit(){
    if (!this.config) return
    this.contentConfig = {
      size: ContentFontSize.Small,
      content: [`${this.config.firstName} ${this.config.lastName}`, this.config.emailAddress]
    }
  }

  onProfileCardClicked(){
    if (!this.config?.clickRoute) return
    this.navService.navTo(this.config.clickRoute)
  }
}
