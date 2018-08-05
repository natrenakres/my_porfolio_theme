import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { ShellComponent } from "./shell/shell.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home/home.component";


@NgModule({
  imports: [SharedModule, RouterModule],
  declarations: [
    HeaderComponent,
    ShellComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [
    
  ]
})
export class CoreModule {}
