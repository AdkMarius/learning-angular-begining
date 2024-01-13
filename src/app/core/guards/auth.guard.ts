//import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

export const isUserLogin = (
  //route: ActivatedRouteSnapshot,
  //state: RouterStateSnapshot
) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.getToken())
    return true;
  else {
    router.navigateByUrl('/login').then(r => {});
    return false;
  }
}
