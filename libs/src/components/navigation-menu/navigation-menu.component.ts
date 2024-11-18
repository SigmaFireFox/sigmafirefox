import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenu, NavigationMenuConfig } from './navigation-menu.model';
import { IconComponent } from "../../widgets/icon/icon.component";
import { ContentComponent } from "../../widgets/content/content.component";
import { ContentFontSize } from '../../widgets/content/content.model';
import { IconSize } from '../../widgets/icon/icon.model';
import { RouteRelationshipType } from '../../services/navigation/navigation.model';
import { NavigationService } from '@sigmafirefox/services';

@Component({
  selector: 'sff-navigation-menu',
  standalone: true,
  imports: [CommonModule, IconComponent, ContentComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent implements OnInit {
  @Input() menu: NavigationMenu | undefined;

  config: NavigationMenuConfig = {items: []}
  currentSelection = ''

  constructor(private nav: NavigationService){}

  ngOnInit(){
    if (!this.menu || !this.config) return
    this.menu.items.forEach((item) => {
      this.config.items.push({
        icon: {
          size: IconSize.Small,
          name: item.icon,
        },
        navlink: {
          relationship: RouteRelationshipType.Absolute,
          route: item.route,
          content: {
            size: ContentFontSize.Medium,
            content: [item.description]
          }
        }
      })
    })
  }

  onMenuItemClicked(route: string) {
    this.currentSelection = route
    this.nav.navTo({
      relationship: RouteRelationshipType.Absolute,
      route: route
    })
  }
}
