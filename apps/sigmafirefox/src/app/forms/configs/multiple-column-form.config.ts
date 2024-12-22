import { FormButtonAlignment, MultipleColumnFormConfig } from "@sigmafirefox/components";
import { ButtonType, ButtonSize } from "@sigmafirefox/widgets";

export const MockMultipleColumnFormConfig: MultipleColumnFormConfig = {
  rows: [],
  buttons: [
      {
        config: {
          name: 'button',
          text: 'Primary Large (100%) of available width',
          type: ButtonType.Primary,
          size: ButtonSize.Large,
        },
        isSubmit: true,
        alignment: FormButtonAlignment.Full,
      },
    ],
}
