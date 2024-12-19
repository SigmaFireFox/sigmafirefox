import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationMenuConfig,
  NavigationMenuItemConfig,
  NavigationMenuItem,
} from './navigation-menu.model';
import { IconComponent } from '../../widgets/icon/icon.component';
import { ContentComponent } from '../../widgets/content/content.component';
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
  @Input() config: NavigationMenuConfig | undefined;
  @Output() menuExpanded: EventEmitter<void> = new EventEmitter();
  @Output() menuItemClicked: EventEmitter<NavigationMenuItem> = new EventEmitter();

  menuItems: NavigationMenuItem[] = [];
  currentSelection = '';


  ngOnInit() {
    this.setMenuItems();
  }

  private setMenuItems() {
    if (!this.config) return;
    this.config.menuItems.forEach((itemConfig: NavigationMenuItemConfig) => {
      this.menuItems.push({
        icon: {
          size: IconSize.Small,
          name: itemConfig.icon,
        },
        navlink: {
          relationship: RouteRelationshipType.Absolute,
          route: itemConfig.route,
          content: {
            size: ContentFontSize.Medium,
            content: [itemConfig.description],
          },
        },
        showChildren: false,
        children: itemConfig.children
          ? this.setChildrenFromItemConfig(itemConfig)
          : [],
      });
    });
  }

  private setChildrenFromItemConfig(
    itemConfig: NavigationMenuItemConfig
  ): NavigationMenuItem[] {
    if (!itemConfig.children) return [];
    const childrenMenuItems: NavigationMenuItem[] = [];
    itemConfig.children.forEach((childItemConfig: NavigationMenuItemConfig) => {
      childrenMenuItems.push({
        icon: {
          size: IconSize.Small,
          name: childItemConfig.icon,
        },
        navlink: {
          relationship: RouteRelationshipType.Absolute,
          route: childItemConfig.route,
          content: {
            size: ContentFontSize.Medium,
            content: [childItemConfig.description],
          },
        },
        showChildren: false,
        children: [],
      });
    });

    return childrenMenuItems;
  }

  onItemClicked(menuItem: NavigationMenuItem) {
    if (menuItem.children.length > 0) 
      this.expandMenu(menuItem)
    else {
      this.currentSelection = menuItem.navlink.route;
    }

    this.menuItemClicked.emit(menuItem)
  }

  private expandMenu(menuItem: NavigationMenuItem){
    const expandMenu = !menuItem.showChildren
    this.closeAllParentItems()
    menuItem.showChildren = expandMenu
  }

  private closeAllParentItems() {
    this.menuItems.forEach((item) => {
      item.showChildren = false;
    });
  }
}
