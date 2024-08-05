import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FaceComponent } from '../face/face.component';
import { Face } from '../face/face.model';
import { FaceService } from '../face/face.service';
import { HeaderService } from '../header/header.service';
import { DossierService } from './dossier.service';

@Component({
  selector: 'app-dossier',
  standalone: true,
  imports: [FaceComponent],
  templateUrl: './dossier.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DossierComponent implements OnInit {
  readonly airTargetsDestroyed = this._dossierService.getAirTargetsDestroyed();
  readonly face: Face = this._faceService.face;
  readonly firstName = this._dossierService.firstName;
  readonly isAce = this._dossierService.isAce;

  readonly landTargetsDestroyed =
    this._dossierService.getLandTargetsDestroyed();

  readonly lastName = this._dossierService.lastName;
  readonly seaTargetsDestroyed = this._dossierService.getSeaTargetsDestroyed();
  readonly wallet = this._dossierService.wallet();

  constructor(
    private readonly _dossierService: DossierService,
    private readonly _faceService: FaceService,
    private readonly _headerService: HeaderService,
  ) {}

  ngOnInit(): void {
    this._headerService.clearBadge('dossier');
  }
}
