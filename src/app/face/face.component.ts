import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { EyesColor } from './eyes-color.model';
import { FaceService } from './face.service';
import { FacialHairType } from './facial-hair-type.model';
import { HairColor } from './hair-color.model';
import { HairType } from './hair-type.model';
import { SkinType } from './skin-type.model';

@Component({
  selector: 'app-face',
  standalone: true,
  imports: [NgIf],
  templateUrl: './face.component.html',
  styleUrl: './face.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaceComponent {
  @Input()
  eyesColor: EyesColor = this._faceService.getRandomEyesColor();

  @Input()
  facialHairType?: FacialHairType = this._faceService.getRandomFacialHairType();

  @Input()
  hairColor: HairColor = this._faceService.getRandomHairColor();

  @Input()
  hairType: HairType = this._faceService.getRandomHairType();

  @Input()
  skinType: SkinType = this._faceService.getRandomSkinType();

  constructor(private readonly _faceService: FaceService) {}
}
