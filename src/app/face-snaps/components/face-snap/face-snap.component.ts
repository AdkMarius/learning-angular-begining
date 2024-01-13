import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  textButtonSnap!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router) {}

  ngOnInit() {
    this.textButtonSnap = 'Oh, snap!';
  }

  onSnap() {
    if (this.textButtonSnap == 'Oh, snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.textButtonSnap = 'Oops, unSnap!';
    }
    else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.textButtonSnap = 'Oh, snap!';
    }
  }

  onViewFaceSnap() {
    const faceSnapId = this.faceSnap.id;
    this.router.navigateByUrl(`facesnaps/${faceSnapId}`);
  }
}
