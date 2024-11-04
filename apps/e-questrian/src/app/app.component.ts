import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorModalComponent } from '@sigmafirefox/services';

@Component({
  standalone: true,
  imports: [RouterModule, ErrorModalComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'eQuestrian';
}
