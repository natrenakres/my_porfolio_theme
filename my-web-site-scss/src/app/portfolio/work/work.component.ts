import { Component, OnInit } from '@angular/core';
import { WorkService } from './work.service';
import {Skill, Work} from '../models/work';

@Component({
  selector: 'se-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  works: Work[] | null;
  skills: Skill[] | null;
  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.workService.getWorks().subscribe(works => this.works = works);
    this.workService.getSkills().subscribe(skills => this.skills = skills);
  }

}
