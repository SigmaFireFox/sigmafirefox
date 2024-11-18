import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenu, NavigationMenuConfig } from './navigation-menu.model';
import { IconComponent } from "../../widgets/icon/icon.component";
import { ContentComponent } from "../../widgets/content/content.component";
import { ContentFontSize } from '../../widgets/content/content.model';
import { IconSize } from '../../widgets/icon/icon.model';
import { RouteRelationshipType } from '../../services/navigation/navigation.model';

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
          route: '',
          content: {
            size: ContentFontSize.Medium,
            content: [item.description]
          }
        }
      })
      console.log(item)
    })
  }
}
