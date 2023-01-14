import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialise form
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      username: [""],
      email: [""],
      password: [""],
    });
  }

  onSubmit(): void {
    console.warn(this.form.value);
  }
}