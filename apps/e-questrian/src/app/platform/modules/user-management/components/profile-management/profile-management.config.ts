import { FormButtonAlignment } from '@sigmafirefox/components';
import { ButtonType, ButtonSize } from '@sigmafirefox/widgets';

export const ViewOnlyFormButtons = [
  {
    config: {
      name: 'edit',
      text: 'Edit',
      type: ButtonType.Secondary,
      size: ButtonSize.Small,
    },
    isSubmit: false,
    alignment: FormButtonAlignment.Right,
  },
];

export const EditViewFormButtons = [
  {
    config: {
      name: 'cancel',
      text: 'Cancel',
      type: ButtonType.Secondary,
      size: ButtonSize.Small,
    },
    isSubmit: false,
    alignment: FormButtonAlignment.Right,
  },
  {
    config: {
      name: 'save',
      text: 'Save',
      type: ButtonType.Primary,
      size: ButtonSize.Small,
    },
    isSubmit: true,
    alignment: FormButtonAlignment.Right,
  },
];
