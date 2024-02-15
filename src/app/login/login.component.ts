import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errore = false;

  loginForm = new FormGroup({
    email: new FormControl('',[ Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'), Validators.required ]),
    password: new FormControl('', [ Validators.pattern('^.{8,16}$'), Validators.required ]),
  });

  submitVal(){


    if (this.loginForm.valid) {
      /*const datosFormulario = this.loginForm.value;
      this.errore = false

      this.http.post('http://127.0.0.1:8000/api/login', datosFormulario)
        .subscribe(
          (respuesta) => {
            console.log('Éxito:', respuesta);
            
            this.router.navigate(['/clients']);
          },
          (error) => {
            console.error('Error:', error);
            this.errore = true
          }
        );*/
    }
  }

  get isNameInvalid() {
    const control = this.loginForm.get('name');
    return control ? control.hasError('pattern') : false;
  }

  get isPassInvalid() {
    const control = this.loginForm.get('password');
    return control ? control.hasError('pattern') : false;
  }

  get isMailInvalid() {
    const control = this.loginForm.get('email');
    return control ? control.hasError('pattern') : false;
  }

}
