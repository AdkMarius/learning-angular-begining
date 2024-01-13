import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable, switchMap, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private  http: HttpClient) {
  }

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updateFaceSnap => this.http.put<FaceSnap>(
        `http://localhost:3000/facesnaps/${faceSnapId}`, updateFaceSnap))
    );
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  createFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string } ): Observable<FaceSnap> {

    return this.getAllFaceSnaps().pipe(
      map(faceSnaps => [...faceSnaps].sort((a, b) => a.id - b.id)),
      map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
      map(previousfaceSnap => ({
        ...formValue,
        id: previousfaceSnap.id + 1,
        createdDate: new Date(),
        snaps: 0
      })),
      switchMap(newFaceSnap => this.http.post<FaceSnap>(
        'http://localhost:3000/facesnaps', newFaceSnap)
      )
    );
  }
}
