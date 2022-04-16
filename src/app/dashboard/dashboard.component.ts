import {AfterViewInit, Component, OnInit} from '@angular/core';
import {window} from "rxjs";
import {Router} from "@angular/router";
import {LoaderService} from "../service/loader.service";

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  isSidebarOpen: boolean = false;
  title: string = 'Dashboard';

  constructor(
    private router: Router,
    public loaderService: LoaderService,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if ($(window).width() <= 600) {
      this.isSidebarOpen = false;
      $(".sidebar").css("display", "none");
    } else {
      this.isSidebarOpen = true;
      $(".sidebar").css("position", "relative");
      $("#toggle-sidebar").css("display", "none");
    }

    $("#toggle-sidebar").click(() => {
      if (this.isSidebarOpen && $(window).width() <= 600) {
        this.isSidebarOpen = false;
        $(".sidebar").css("display", "none");
      } else {
        this.isSidebarOpen = true;
        $(".sidebar").css("display", "block");
      }
    })

    $(window).resize(
      function () {
        if ($(window).width() <= 600) {
          $(".sidebar").css("display", "none");
        } else {
          $("#toggle-sidebar").css("display", "none");
          $(".sidebar").css("position", "relative");
        }
      }.bind(this)
    );

    $(".main").click((event: any) => {
      if (event?.target?.id != 'toggle-sidebar' && $(window).width() <= 600) {
        $(".sidebar").css("display", "none");
        this.isSidebarOpen = false;
      }
    });

  }


  setHeader() {
    this.loaderService.loader(true);
    if (this.router.url) {
      this.title = this.router.url.split('/')[1];
    }
  }
}
