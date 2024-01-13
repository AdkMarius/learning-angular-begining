import {Component, Input} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap$!: Observable<FaceSnap>;

  textButtonSnap!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute,) {}

  ngOnInit() {
    this.textButtonSnap = 'Oh, snap!';

    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId: number) {
    if (this.textButtonSnap == 'Oh, snap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() =>
          this.textButtonSnap = 'Oops, unSnap!'
        )
      );
    }
    else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() =>
          this.textButtonSnap = 'Oh, snap!'
        )
      );
    }
  }
}
