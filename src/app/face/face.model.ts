import { EyesColor } from './eyes-color.model';
import { FacialHairType } from './facial-hair-type.model';
import { HairColor } from './hair-color.model';
import { HairType } from './hair-type.model';
import { SkinType } from './skin-type.model';

export interface Face {
  eyesColor: EyesColor;
  facialHairType?: FacialHairType;
  hairColor: HairColor;
  hairType: HairType;
  skinType: SkinType;
}
