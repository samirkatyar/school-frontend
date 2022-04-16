import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../../service/loader.service";
import {AnalyticsService} from "../../service/analytics.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  filters = [
    {name: 'Maths', code: 'maths'},
    {name: 'Physics', code: 'physics'},
    {name: 'Chemistry', code: 'chemistry'},
    {name: 'Biology', code: 'biology'},
    {name: 'English', code: 'english'},
  ]
  filter = {name: 'Maths', code: 'maths'}
  data = [];

  constructor(private analyticsService: AnalyticsService,
              private loaderService: LoaderService) {
  }

  ngOnInit(): void {
  }

  loadData() {
    this.loaderService.loader(true)
    this.analyticsService.getData(this.filter.code).subscribe((res) => {
      this.data = res.data;
      this.loaderService.loader(false)
    }, error => {
      this.loaderService.loader(false)
      console.error(error)
    });
  }
}
