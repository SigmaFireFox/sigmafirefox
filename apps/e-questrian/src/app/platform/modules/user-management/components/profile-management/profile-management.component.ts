import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  HeaderConfig,
  HeaderFontSize,
} from '@sigmafirefox/widgets';
import {
  FieldType,
  FormButton,
  LabelPosition,
  MultipleColumnFormComponent,
  MultipleColumnFormConfig,
  ProfileCardComponent,
  ProfileCardConfig,
  ProfileCardSize,
} from '@sigmafirefox/components';
import { FormGroup } from '@angular/forms';
import {
  EditViewFormButtons,
  ViewOnlyFormButtons,
} from './profile-management.config';

@Component({
  selector: 'app-profile-management',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MultipleColumnFormComponent,
    ProfileCardComponent,
  ],
  templateUrl: './profile-management.component.html',
  styleUrl: './profile-management.component.scss',
})
export class ProfileManagementComponent {
  headerConfig: HeaderConfig = {
    size: HeaderFontSize.Large,
    content: 'Profile Management',
  };

  profileFormConfig: MultipleColumnFormConfig = {
    isViewOnly: true,
    rows: [
      {
        columns: 2,
        fields: [
          {
            name: 'first_name',
            config: {
              type: FieldType.Input,
              label: 'First name',
              labelPosition: LabelPosition.External,
            },
          },
          {
            name: 'last_name',
            config: {
              type: FieldType.Input,
              label: 'Last name',
              labelPosition: LabelPosition.External,
            },
          },
        ],
      },
      {
        columns: 2,
        fields: [
          {
            name: 'id_number',
            config: {
              type: FieldType.Input,
              label: 'ID number',
              labelPosition: LabelPosition.External,
            },
          },
          {
            name: 'date_of_birth',
            config: {
              type: FieldType.Input,
              label: 'Date of Birth',
              labelPosition: LabelPosition.External,
            },
          },
        ],
      },
      {
        columns: 2,
        fields: [
          {
            name: 'contact_number',
            config: {
              type: FieldType.Input,
              label: 'Contact number',
              labelPosition: LabelPosition.External,
            },
          },
          {
            name: 'secondary-contact',
            config: {
              type: FieldType.Input,
              label: 'Secondary contact',
              labelPosition: LabelPosition.External,
            },
          },
        ],
      },
      {
        columns: 2,
        fields: [
          {
            name: 'primary_email',
            config: {
              type: FieldType.Input,
              label: 'Primary email',
              labelPosition: LabelPosition.External,
            },
          },
          {
            name: 'secondary_email',
            config: {
              type: FieldType.Input,
              label: 'Secondary email',
              labelPosition: LabelPosition.External,
            },
          },
        ],
      },
      {
        columns: 2,
        fields: [
          {
            name: 'residential-address',
            config: {
              type: FieldType.Textarea,
              label: 'Residential address',
              labelPosition: LabelPosition.External,
            },
          },
          {
            name: 'Postal address',
            config: {
              type: FieldType.Textarea,
              label: 'Postal address',
              labelPosition: LabelPosition.External,
            },
          },
        ],
      },
    ],
    buttons: ViewOnlyFormButtons,
  };

  profileCardConfig: ProfileCardConfig = {
    profileCardSize: ProfileCardSize.Large,
    firstName: 'Dude',
    lastName: 'McGee',
    profileContent: ['My Ride Equestrian School', 'UserID: 12398724598275'],
  };

  constructor(private cd: ChangeDetectorRef) {}

  onFormSubmitted(form: FormGroup) {
    console.log(form);
    this.profileFormConfig.isViewOnly = true;
    this.profileFormConfig.buttons = ViewOnlyFormButtons;
  }

  onButtonClicked(button: FormButton) {
    switch (button.config.name) {
      case 'edit': {
        this.profileFormConfig.isViewOnly = false;
        this.profileFormConfig.buttons = EditViewFormButtons;
        break;
      }
      case 'cancel': {
        this.profileFormConfig.isViewOnly = true;
        this.profileFormConfig.buttons = ViewOnlyFormButtons;
        break;
      }
    }
  }
}
