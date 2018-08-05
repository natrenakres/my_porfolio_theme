import { Component, OnInit } from '@angular/core';
import { PersonalService } from './personal.service';
import { Person } from '../models/Person';

@Component({
  selector: 'se-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  experiences: Person[] | null;
  constructor(private personService: PersonalService) { }

  ngOnInit() {
    this.personService.getPerson().subscribe(x=> this.experiences = x);
  }

}
