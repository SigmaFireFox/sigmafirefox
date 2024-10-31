import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from "../content/content.component";
import { NavlinkConfig } from './navlink.model';
import { NavigationService } from '../../services/navigation/navigation.service';
import { RouteRelationshipType } from '../../services/navigation/navigation.model';

@Component({
  selector: 'sff-navlink',
  standalone: true,
  imports: [CommonModule, ContentComponent],
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.scss',
})
export class NavlinkComponent implements OnInit {
  @Input() config: NavlinkConfig | undefined;
  @Output() clicked: EventEmitter<string> = new EventEmitter();

  constructor(private navService: NavigationService){}

  ngOnInit(){
    if (!this.config?.content) return
    this.config.content.isNavLink = true
  }

  onClick(){
    if (!this.config) return
    if (this.config.relationship === RouteRelationshipType.None) 
      return this.clicked.emit(this.config.route)
    this.navService.navTo(this.config)  
  }
}

