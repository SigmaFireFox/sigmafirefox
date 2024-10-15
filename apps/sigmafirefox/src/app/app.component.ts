import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ButtonComponent,
  ButtonConfig,
  ContentComponent,
  ContentConfig,
  FontSize,
} from '@sigmafirefox/buttons';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent, ContentComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'sigmafirefox';

  buttonConfig: ButtonConfig = {
    name: 'button',
    text: 'Test',
  };

  contentConfig: ContentConfig = {
    size: FontSize.Medium,
    content: [
      'The is content',
      "It's typically set up in paragraphs",
      'The paragraphs should self organise and have a nice padding',
    ],
  };
}
