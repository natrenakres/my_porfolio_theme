import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../portfolio/about/personal.service';
import { Person } from '../../portfolio/models/person';

@Component({
  selector: 'se-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  }

}
