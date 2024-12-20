import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  currentSelectedItem = ''
  currentExtendedGroupParent = ''

  onMenuGroupParentClicked(parentRoute: string){
    console.log(parentRoute)
    this.currentSelectedItem = ''
    this.currentExtendedGroupParent = parentRoute
  }
}
