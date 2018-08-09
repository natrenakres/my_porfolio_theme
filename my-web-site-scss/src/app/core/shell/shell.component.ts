import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'se-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private router: Router,
    private location: Location,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    console.log('Shell compoenent');
    this.checkUrlForOverlay();
    this.router.events.subscribe(v=> {
      if(v instanceof NavigationEnd) {
        this.checkUrlForOverlay();
        (<any>window).ga('set', 'page', v.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
        }
    })
  }

  private checkUrlForOverlay() {
    if (this.location.path().includes('home')) {
      this.document.body.id = 'bg-img';
    }
    else {
      this.document.body.id = 'none-img';
    }
  }
}
