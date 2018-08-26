import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { WorkComponent } from "./work/work.component";
import { SharedModule } from "../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";
import { WorkService } from "./work/work.service";
import { PersonalService } from "./about/personal.service";
import { SkillsComponent } from './work/skills/skills.component';

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "work", component: WorkComponent },
  { path: "", redirectTo: "work", pathMatch: "full" }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [AboutComponent, ContactComponent, WorkComponent, SkillsComponent],
  providers: [
    WorkService,
    PersonalService
  ]
})
export class PortfolioModule {}
