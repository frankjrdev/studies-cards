import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-profile",
  imports: [],
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}
