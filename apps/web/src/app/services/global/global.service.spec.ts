/* eslint-disable no-undef */
import { TestBed } from "@angular/core/testing";
import { GlobalService } from "./global.service";

describe("SidebarService", () => {
  let service: GlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
