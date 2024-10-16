import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteRelationshipType } from './navigation.model';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router, protected route: ActivatedRoute) {}

  navTo(routeRelation: RouteRelationshipType, route: string){
    let param: unknown[] = []
    switch (routeRelation) {
      case RouteRelationshipType.Absolute :{
        param = [`"${route}"`]
        break
      }
      case RouteRelationshipType.Parent :{
        param = [`"../../${route}"`]
        break
      }
      case RouteRelationshipType.Sibling :{
        param = [`"../${route}"`]
        break
      }
      case RouteRelationshipType.Child :{
        param = [`./"${route}"`]
        break
      }
    }

    this.router.navigate(param, {relativeTo: this.route});
  }
}
