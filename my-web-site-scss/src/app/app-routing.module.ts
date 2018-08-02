import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShellComponent } from "./core/shell/shell.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { HomeComponent } from "./core/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      { path: "home", component: HomeComponent },
      {
        path: "my",
        loadChildren: "./portfolio/portfolio.module#PortfolioModule"
      },
      { path: "**", redirectTo: "home", pathMatch: "full" }
    ]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
