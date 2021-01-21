import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PhoneMaskDirective } from "./phone-mask.directive";
import { MaskPipe } from "./masks.pipe";
@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, PhoneMaskDirective, MaskPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
