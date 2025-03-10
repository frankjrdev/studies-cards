import { Component, computed, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { GlobalService } from "./services/global/global.service";

@Component({
  selector: "app-root",
  imports: [SidebarComponent, RouterOutlet],
  template: `
    <sidebar />
    <main
      class="min-h-screen p-10 transition-all duration-300 ease-in-out"
      [class.ml-64]="isSidebarOpened()"
    >
      <router-outlet />
    </main>
  `,
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  private globalService = inject(GlobalService);

  // Propiedad computada para el estado del sidebar
  isSidebarOpened = computed(() => this.globalService.isSideBarOpened());
}
