import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FaceComponent } from '../face/face.component';
import { Face } from '../face/face.model';
import { FaceService } from '../face/face.service';
import { DossierService } from './dossier.service';

@Component({
  selector: 'app-dossier',
  standalone: true,
  imports: [FaceComponent],
  templateUrl: './dossier.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DossierComponent {
  readonly face: Face = this._faceService.face;
  readonly firstName = this._dossierService.firstName;
  readonly lastName = this._dossierService.lastName;

  constructor(
    private readonly _dossierService: DossierService,
    private readonly _faceService: FaceService,
  ) {}
}
