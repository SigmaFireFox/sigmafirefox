import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarArrays, StarRaterConfig, StarSize } from './star-rater.model';
import { IconConfig, IconSize } from '../../widgets/icon/icon.model';
import { IconComponent } from '../../widgets/icon/icon.component';

@Component({
  selector: 'sff-star-rater',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './star-rater.component.html',
  styleUrl: './star-rater.component.scss',
})
export class StarRaterComponent implements OnInit {
  @Input() config: StarRaterConfig | undefined;

  emptyStar: IconConfig = {
    size: IconSize.Medium,
    name: 'star_border',
  };

  halfStar: IconConfig = {
    size: IconSize.Medium,
    name: 'star_half',
  };

  fullStar: IconConfig = {
    size: IconSize.Medium,
    name: 'star',
  };

  stars: StarArrays = {
    fullStars: [],
    halfStars: [],
    emptyStars: [],
  };

  ngOnInit() {
    this.setStars();
    this.setStarsSize();
  }

  private setStars() {
    if (!this.config) return;

    // Full stars
    if (this.config.rating >= 1) {
      for (let i = 0; i < Math.floor(this.config.rating); i++) {
        this.stars.fullStars.push('*');
      }
    }

    // Half stars
    if (this.config.rating - Math.floor(this.config.rating) >= 0.5) {
      this.stars.halfStars.push('*');
    }

    // Empty stars
    if (this.config.rating < 4.5) {
      for (let i = 0; i < Math.ceil(5 - this.config.rating); i++) {
        this.stars.emptyStars.push('*');
      }
    }
  }

  private setStarsSize() {
    if (!this.config) return;

    switch (this.config.size) {
      case StarSize.Small: {
        this.fullStar.size = IconSize.XSmall;
        this.halfStar.size = IconSize.XSmall;
        this.emptyStar.size = IconSize.XSmall;
        break;
      }
      case StarSize.Medium: {
        this.fullStar.size = IconSize.Small;
        this.halfStar.size = IconSize.Small;
        this.emptyStar.size = IconSize.Small;
        break;
      }
      case StarSize.Large: {
        this.fullStar.size = IconSize.Medium;
        this.halfStar.size = IconSize.Medium;
        this.emptyStar.size = IconSize.Medium;
      }
    }
  }
}
