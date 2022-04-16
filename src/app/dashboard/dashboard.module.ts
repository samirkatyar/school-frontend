import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {dashboardRoutes} from "./dashboard-routing.module";
import {PanelMenuModule} from "primeng/panelmenu";
import {DashboardComponent} from "./dashboard.component";
import {MenuModule} from "primeng/menu";
import {AvatarModule} from "primeng/avatar";
import {TieredMenuModule} from "primeng/tieredmenu";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {StepsModule} from "primeng/steps";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {DividerModule} from "primeng/divider";
import {LoaderComponent} from "../common-components/loader/loader.component";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {CommonModule} from "@angular/common";
import {ListboxModule} from "primeng/listbox";
import {SplitterModule} from "primeng/splitter";
import {TabViewModule} from "primeng/tabview";
import {InputSwitchModule} from "primeng/inputswitch";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {CalendarModule} from "primeng/calendar";
import { ResultsComponent } from './results/results.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        PanelMenuModule,
        RouterModule.forChild(dashboardRoutes),
        MenuModule,
        AvatarModule,
        TieredMenuModule,
        ToolbarModule,
        InputTextModule,
        TableModule,
        StepsModule,
        CardModule,
        DropdownModule,
        FileUploadModule,
        DividerModule,
        ProgressSpinnerModule,
        CommonModule,
        ListboxModule,
        SplitterModule,
        TabViewModule,
        InputSwitchModule,
        DialogModule,
        ToastModule,
        CalendarModule
    ],
  declarations: [
    DashboardComponent,
    LoaderComponent,
    ResultsComponent,
  ],
  providers: [],
})
export class DashboardModule {
}
