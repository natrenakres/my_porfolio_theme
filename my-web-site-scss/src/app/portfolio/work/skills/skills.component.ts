import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../../models/work";

@Component({
  selector: 'se-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: Skill[];

  constructor() { }

  ngOnInit() {
  }

}
