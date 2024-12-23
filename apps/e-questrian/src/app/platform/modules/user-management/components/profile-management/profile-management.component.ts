import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonSize,
  ButtonType,
  HeaderComponent,
  HeaderConfig,
  HeaderFontSize,
} from '@sigmafirefox/widgets';
import {
  FieldType,
  FormButtonAlignment,
  LabelPosition,
  MultipleColumnFormComponent,
  MultipleColumnFormConfig,
  ProfileCardComponent,
  ProfileCardConfig,
  ProfileCardSize,
} from '@sigmafirefox/components';
import { FormGroup } from '@angular/forms';

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
              isViewOnly: true
            },
          },
          {
            name: 'last_name',
            config: {
              type: FieldType.Input,
              label: 'Last name',
              labelPosition: LabelPosition.External,
              isViewOnly: true
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
              isViewOnly: true
            },
          },
          {
            name: 'date_of_birth',
            config: {
              type: FieldType.Input,
              label: 'Date of Birth',
              labelPosition: LabelPosition.External,
              isViewOnly: true            },
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
              isViewOnly: true            },
          },
          {
            name: 'secondary-contact',
            config: {
              type: FieldType.Input,
              label: 'Secondary contact',
              labelPosition: LabelPosition.External,
              isViewOnly: true            },
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
              isViewOnly: true            },
          },
          {
            name: 'secondary_email',
            config: {
              type: FieldType.Input,
              label: 'Secondary email',
              labelPosition: LabelPosition.External,
              isViewOnly: true            },
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
              isViewOnly: true            },
          },
          {
            name: 'Postal address',
            config: {
              type: FieldType.Textarea,
              label: 'Postal address',
              labelPosition: LabelPosition.External,
              isViewOnly: true            },
          },
        ],
      },
    ],
    buttons: [
      {
        config: {
          name: 'edit',
          text: 'Edit',
          type: ButtonType.Secondary,
          size: ButtonSize.Small,
        },
        isSubmit: true,
        alignment: FormButtonAlignment.Right,
      },
    ],
  };

  profileCardConfig: ProfileCardConfig = {
      profileCardSize: ProfileCardSize.Large,
      firstName: 'Dude',
      lastName: 'McGee',
      profileContent: ['My Ride Equestrian School', 'UserID: 12398724598275']
  }

  onFormSubmitted(form: FormGroup) {
    console.log(form);
  }
}
