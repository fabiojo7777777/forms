import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <form	#formEmail="ngForm"	(ngSubmit)="enviar(formEmail)">
				{{formEmail}}
				<label	for="email">Assine!</label>
        <input
            email
						name="email"
						[(ngModel)]="emailAddress"
						#email="ngModel"
						required
						type="email"
						id="email"
            placeholder="nome@seumail.com">
            {{email.invalid}}
            <span	class="error-msg"	[ngClass]="{'is-invalid':	email.invalid}">
				Preencha	um	email!
		</span>
				<button>enviar</button>
		</form>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  emailAddress = '';
  enviar(form: NgForm) {
    console.log(form);
    if(form.invalid) {
      console.error('form	invalido');
      return;
    }
    console.log('form	valido');
    form.resetForm(form);
  }
}
