import { Injectable } from '@angular/core';

import { EYES_COLORS, EyesColor } from './eyes-color.model';
import { Face } from './face.model';
import { FACIAL_HAIR_TYPES, FacialHairType } from './facial-hair-type.model';
import { HAIR_COLORS, HairColor } from './hair-color.model';
import { HAIR_TYPES, HairType } from './hair-type.model';
import { SKIN_TYPES, SkinType } from './skin-type.model';

@Injectable({
  providedIn: 'root',
})
export class FaceService {
  face: Face = this.getRandomFace();

  getRandomEyesColor(): EyesColor {
    const random = Math.floor(Math.random() * EYES_COLORS.length);

    return EYES_COLORS[random];
  }

  getRandomFace(): Face {
    return {
      eyesColor: this.getRandomEyesColor(),
      facialHairType: this.getRandomFacialHairType(),
      hairColor: this.getRandomHairColor(),
      skinType: this.getRandomSkinType(),
      hairType: this.getRandomHairType(),
    };
  }

  getRandomFacialHairType(): FacialHairType | undefined {
    const isShaved = Math.random() < 0.75;

    if (isShaved) {
      return undefined;
    }

    const random = Math.floor(Math.random() * FACIAL_HAIR_TYPES.length);

    return FACIAL_HAIR_TYPES[random];
  }

  getRandomHairColor(): HairColor {
    const random = Math.floor(Math.random() * HAIR_COLORS.length);

    return HAIR_COLORS[random];
  }

  getRandomHairType(): HairType {
    const random = Math.floor(Math.random() * HAIR_TYPES.length);

    return HAIR_TYPES[random];
  }

  getRandomSkinType(): SkinType {
    const random = Math.floor(Math.random() * SKIN_TYPES.length);

    return SKIN_TYPES[random];
  }

  reset(): void {
    this.face = this.getRandomFace();
  }
}
