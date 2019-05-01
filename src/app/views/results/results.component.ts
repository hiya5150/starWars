import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../models/swapi.service';
import {ActivatedRoute} from '@angular/router';
import {People} from '../../models/people';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {
  results: People[];
  query: string;
  constructor(private swapi: SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((pmap => {
      this.query = pmap.get('query');
      this.getResults();
    }));
  }

  getResults(): void {
    this.swapi.searchPeople(this.query).subscribe(folks => {
    this.results = folks;
  });
}


}
