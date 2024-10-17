import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterConfig } from './footer.model';
import { NavlinkComponent } from '../../widgets/navlink/navlink.component';
import { ContentComponent } from '../../widgets/content/content.component';
import { CardGridComponent } from "../../compositions/card-grid/card-grid.component";

@Component({
  selector: 'sff-footer',
  standalone: true,
  imports: [CommonModule, NavlinkComponent, ContentComponent, CardGridComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() config: FooterConfig | undefined;
}
