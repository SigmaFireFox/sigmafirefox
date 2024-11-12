import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorModalComponent } from '@sigmafirefox/services';

@Component({
  standalone: true,
  imports: [RouterModule, ErrorModalComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
