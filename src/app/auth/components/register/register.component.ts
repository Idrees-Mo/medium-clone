import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { Store } from "@ngrx/store";
import { register } from "../../store/actions";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}

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
    this.store.dispatch(register(this.form.value));
  }
}
