import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule],
  exports: [FooterComponent, CommonModule, HttpClientModule],
  declarations: [FooterComponent]
})
export class SharedModule {}
