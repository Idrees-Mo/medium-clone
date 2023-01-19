import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { registerAction } from "../../store/actions/actions";
import { isSubmittingSelector } from "../../store/selectors";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    // Initialise form
    this.initForm();
    this.initialiseValues();
  }

  initForm(): void {
    this.form = this.fb.group({
      username: [""],
      email: [""],
      password: [""],
    });
  }

  initialiseValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onSubmit(): void {
    console.warn(this.form.value);
    this.store.dispatch(registerAction(this.form.value));
  }
}
