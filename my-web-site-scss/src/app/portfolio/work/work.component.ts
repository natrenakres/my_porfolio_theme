import { Component, OnInit } from '@angular/core';
import { WorkService } from './work.service';
import { Work } from '../models/work';

@Component({
  selector: 'se-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  works:Work[] | null;
  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.workService.getWorks().subscribe(works => this.works = works);
  }

}
