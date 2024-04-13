import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  validateForm!: FormGroup;
  isSpinning = false;

  constructor(private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  login() {
    this.authService.login(this.validateForm.value).subscribe((res) => {
      console.log(res);
    })
  }
}
