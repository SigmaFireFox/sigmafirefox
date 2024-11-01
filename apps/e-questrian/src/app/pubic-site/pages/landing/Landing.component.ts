import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CtaBannerComponent,
  FooterComponent,
  NavbarComponent,
} from '@sigmafirefox/components';
import { ButtonConfig } from '@sigmafirefox/widgets';
import {
  ContactUsService,
  NavigationService,
  RouteRelationshipType,
} from '@sigmafirefox/services';
import {
  CardGridComponent,
  CarouselComponent,
  ModalComponent,
} from '@sigmafirefox/compositions';
import { FormGroup } from '@angular/forms';
import {
  carouselConfig,
  contactUsModalConfig,
  ctaBannerConfig,
  featureCards,
  footerConfig,
  navbarConfig,
} from './landing.config';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CtaBannerComponent,
    CardGridComponent,
    CarouselComponent,
    FooterComponent,
    ModalComponent,
  ],
  providers: [ContactUsService],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  // Configs
  navbarConfig = navbarConfig;
  ctaBannerConfig = ctaBannerConfig;
  featureCards = featureCards;
  carouselConfig = carouselConfig;
  footerConfig = footerConfig;
  contactUsModalConfig = contactUsModalConfig;

  // Flags
  showContactUsModal = false;

  constructor(
    private navService: NavigationService,
    private contactService: ContactUsService
  ) {}

  navlinkClicked(navlinkName: string) {
    switch (navlinkName) {
      case 'contact': {
        this.showContactUsModal = true;
        break;
      }
    }
  }

  onCTABannerButtonClicked(button: ButtonConfig) {
    switch (button.name) {
      case 'register': {
        this.navService.navTo({
          relationship: RouteRelationshipType.Child,
          route: 'register',
        });
        break;
      }
      case 'sign-in': {
        this.navService.navTo({
          relationship: RouteRelationshipType.Child,
          route: 'sign-in',
        });
        break;
      }
    }
  }

  onFormSubmitted(form: FormGroup) {
    this.contactService.postContactUsForm(form.value);
    this.showContactUsModal = false;
  }
}
