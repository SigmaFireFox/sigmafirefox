import { HeaderConfig } from '../../widgets/header/header.model';
import { ButtonConfig } from '../../widgets/button/button.model';
import { ContentConfig } from '../../widgets/content/content.model';
import { ImageConfig } from '../../widgets/image/image.model';

export interface CtaBannerConfig {
  image: ImageConfig
  contentLeft: string
  header?: HeaderConfig,
  content?: ContentConfig,
  buttons?: ButtonConfig[]
}