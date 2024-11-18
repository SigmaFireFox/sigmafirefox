import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuConfig } from './navigation-menu.model';
import { IconComponent } from "../../widgets/icon/icon.component";
import { ContentComponent } from "../../widgets/content/content.component";

@Component({
  selector: 'sff-navigation-menu',
  standalone: true,
  imports: [CommonModule, IconComponent, ContentComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  @Input() config: NavigationMenuConfig | undefined;
}
