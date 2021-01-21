import { Component } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  phone: FormControl;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.phone = this.fb.control("1234567890", Validators.required);
  }
}
