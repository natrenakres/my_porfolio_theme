import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../portfolio/about/personal.service';
import { Person } from '../../portfolio/models/person';
import {SocialAccountService} from "../services/social-account.service";

@Component({
  selector: 'se-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  socialAccounts: any;
  constructor(private socialAccountsService: SocialAccountService) { }

  ngOnInit() {
    this.socialAccountsService.getSocialAccounts().subscribe(x=> this.socialAccounts = x );
  }

}
