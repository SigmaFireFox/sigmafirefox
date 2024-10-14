import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent, ButtonConfig } from '@sigmafirefox/buttons';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'sigmafirefox';

  buttonConfig: ButtonConfig = {
    name: 'button',
    text: 'Test'
  }
}
