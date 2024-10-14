import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonsComponent } from '@sigmafirefox/buttons';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ButtonsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'eQuestrian';
}
