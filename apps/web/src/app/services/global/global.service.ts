import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  private _sidebarOpened = signal(false);

  isSideBarOpened = this._sidebarOpened.asReadonly();

  toggleSidebar() {
    this._sidebarOpened.update((value) => !value);
  }
}
