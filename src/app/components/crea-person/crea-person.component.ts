import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/persons';

@Component({
  selector: 'app-crea-person',
  templateUrl: './crea-person.component.html',
})
export class CreaPersonComponent implements OnInit {
  personForm : FormGroup

  constructor( private fb: FormBuilder,
               private router: Router
    ) { 
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      curp: ['', Validators.required],
      peso: ['', Validators.required],
      altura: ['', Validators.required],
      sexo: ['', Validators.required],
      zona: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarPersona() {
    console.log(this.personForm)

    const person: Person = {
      name: this.personForm.get('name')?.value,
      last_name: this.personForm.get('last_name')?.value,
      curp: this.personForm.get('curp')?.value,
      peso: this.personForm.get('peso')?.value,
      altura: this.personForm.get('altura')?.value,
      sexo: this.personForm.get('sexo')?.value,
      zona: this.personForm.get('zona')?.value,      
    }

    console.log(person);
    this.router.navigate(['/']);
  }

}
