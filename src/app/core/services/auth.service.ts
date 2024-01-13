import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string;

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
