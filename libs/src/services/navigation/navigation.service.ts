import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteRelationshipType } from './navigation.model';
import { NavlinkConfig } from '../../widgets/navlink/navlink.model';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {

  constructor(
    private router: Router, 
    protected route: ActivatedRoute
  ) {}

  navTo(navlink: NavlinkConfig) {
    let param: unknown[] = [];
    switch (navlink.relationship) {
      case RouteRelationshipType.Absolute: {
        param = [`${navlink.route}`];
        break;
      }
      case RouteRelationshipType.Parent: {
        param = [`../../${navlink.route}`];
        break;
      }
      case RouteRelationshipType.Sibling: {
        param = [`../${navlink.route}`];
        break;
      }
      case RouteRelationshipType.Child: {
        param = [`./${navlink.route}`];
        break;
      }
    }

    this.router.navigate(param, { relativeTo: this.route });
  }
}
