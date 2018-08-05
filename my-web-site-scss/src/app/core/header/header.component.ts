import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "se-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  toggleMenu() {
    console.log("Toggle Menu");
    this.showMenu = !this.showMenu;
  }

  navigate() {
    this.showMenu = false;
  }
}
