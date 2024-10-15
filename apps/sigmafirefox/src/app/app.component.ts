import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ButtonComponent,
  ButtonConfig,
  ContentComponent,
  ContentConfig,
  ContentFontSize,
  HeaderComponent,
  HeaderConfig,
  HeaderFontSize,
} from '@sigmafirefox/buttons';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent, ContentComponent, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'sigmafirefox';

  headerConfig: HeaderConfig = {
    size: HeaderFontSize.Medium,
    content: "Welcome to SigmaFireFox Library Sandbox"
  }

  buttonConfig: ButtonConfig = {
    name: 'button',
    text: 'Test',
  };

  contentConfig: ContentConfig = {
    size: ContentFontSize.Medium,
    content: [
      'The is content',
      "It's typically set up in paragraphs",
      'The paragraphs should self organise and have a nice padding',
    ],
  };
}
