import { NgIf } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { GlobalService } from "../../services/global/global.service";

@Component({
  selector: "sidebar",
  imports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    NgIf,
  ],
  styleUrls: ["./sidebar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out"
      [class.translate-x-0]="isSidebarOpened()"
      [class.-translate-x-full]="!isSidebarOpened()"
    >
      <!-- Botón de pestaña -->

      @if (isSidebarOpened()) {
        <button
          class="absolute -right-0 top-4 p-2 bg-titles rounded-l-lg shadow-md"
          (click)="toggleSidebar()"
        >
          <span class="text-gray-700">◄ </span>
        </button>
      } @else {
        <button
          class="absolute -right-8 top-4 p-2 bg-titles rounded-r-lg shadow-md"
          (click)="toggleSidebar()"
        >
          <span class="text-gray-700"> ► </span>
        </button>
      }

      <!-- Contenido del sidebar -->
      <div class="p-4">
        <h1 class="text-xl font-bold text-titles">Menú</h1>
        <ul class="mt-4">
          <li class="mb-2">
            <a href="/" class="text-gray-700 hover:text-gray-900">Inicio</a>
          </li>
          <li class="mb-2">
            <a href="/profile" class="text-gray-700 hover:text-gray-900"
              >Perfil</a
            >
          </li>
          <li class="mb-2">
            <a href="/settings" class="text-gray-700 hover:text-gray-900"
              >Configuración</a
            >
          </li>
        </ul>
      </div>
    </div>

    @if (isSidebarOpened()) {
      <!-- Overlay (opcional) -->
      <div
        class="fixed inset-0 z-40 bg-black bg-opacity-50"
        (click)="globalService.toggleSidebar()"
      ></div>
    }
  `,
})
export class SidebarComponent {
  public globalService = inject(GlobalService);

  // Usamos computed para reaccionar a cambios en la señal
  isSidebarOpened = computed(() => this.globalService.isSideBarOpened());

  toggleSidebar(): void {
    this.globalService.toggleSidebar();
  }
}
