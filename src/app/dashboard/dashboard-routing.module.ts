import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {ResultsComponent} from "./results/results.component";

export const dashboardRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: 'dashboard',
        component: ResultsComponent
      },
    ]
  }
];
