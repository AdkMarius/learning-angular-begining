import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SingleFaceSnapComponent} from "./components/single-face-snap/single-face-snap.component";
import {FaceSnapListComponent} from "./components/face-snap-list/face-snap-list.component";
import {NewFaceSnapComponent} from "./components/new-face-snap/new-face-snap.component";
import {isUserLogin} from "../core/guards/auth.guard";

const routes: Routes = [
  { path: 'add-facesnap', component: NewFaceSnapComponent, canActivate: [isUserLogin] },
  { path: ':id', component: SingleFaceSnapComponent, canActivate: [isUserLogin] },
  { path: '', component: FaceSnapListComponent, canActivate: [isUserLogin] },
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FaceSnapsRoutingModule {

}
