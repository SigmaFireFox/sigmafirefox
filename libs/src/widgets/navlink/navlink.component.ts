import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from "../content/content.component";
import { NavlinkConfig } from './navlink.model';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'sff-navlink',
  standalone: true,
  imports: [CommonModule, ContentComponent],
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.scss',
})
export class NavlinkComponent implements OnInit {
  @Input() config: NavlinkConfig | undefined;

  constructor(private navService: NavigationService){}

  ngOnInit(){
    if (!this.config) return
    this.config.content.isNavLink = true
  }

  onClick(){
    if (!this.config) return
    this.navService.navTo(this.config)  
  }
}
