import { Injectable, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  constructor(public oktaAuth: OktaAuthService, public router: Router) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) =>
    this.updateAuthState(isAuthenticated)
    );
  }

  updateAuthState(isAuthenticated: boolean): void {
    this.isAuthenticated = isAuthenticated;
    if (isAuthenticated) {
      this.oktaAuth.getUser().then(console.log);
    }
  }

  subscribeAuthStateChange(updateFn: (authState: boolean) => void): void {
    this.oktaAuth.$authenticationState.subscribe((authState) => updateFn(authState));
  }

  login(): void {
    this.oktaAuth.signInWithRedirect({
      originalUri: 'newsfeed'
    });
  }

  logout(): void {
    this.oktaAuth.signOut();
    this.oktaAuth.tokenManager.clear();
  }
}
