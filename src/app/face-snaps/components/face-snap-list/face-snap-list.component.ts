import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {interval, Observable, Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  private  destroy$!: Subject<boolean>
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   //take(5),
    //   tap(console.log)
    // ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
