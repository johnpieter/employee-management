import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../../guard/auth.guard';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  constructor(public auth: AuthGuard) { }

  ngOnInit() {
  }

}
