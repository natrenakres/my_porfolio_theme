import { Component, Inject, OnInit, OnChanges } from "@angular/core";
import { DOCUMENT, Location } from "@angular/common";
import { ActivatedRoute, UrlSegment } from "@angular/router";

@Component({
  selector: "se-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  
  title = "se";

  constructor(){
  }

  

  ngOnInit(): void {
    
  }



}
