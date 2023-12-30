import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  private readonly USER_ID_KEY = 'user_id';
  private readonly USER_ROLE_KEY = 'user_role';

  setUserId(userId: number): void {
    sessionStorage.setItem(this.USER_ID_KEY, userId.toString());
  }

  getUserId(): number | null {
    const userId = sessionStorage.getItem(this.USER_ID_KEY);
    return userId ? +userId : null;
  }

  setUserRole(userRole: string): void {
    sessionStorage.setItem(this.USER_ROLE_KEY, userRole);
  }

  getUserRole(): string | null {
    return sessionStorage.getItem(this.USER_ROLE_KEY);
  }

  clearSession(): void {
    sessionStorage.clear();
  }
}