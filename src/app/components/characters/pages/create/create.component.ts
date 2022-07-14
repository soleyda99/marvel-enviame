import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { ServicesSharedService } from 'src/app/shared/services/services-shared.service';
import { Result } from '../../models/character';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createForm!: FormGroup;
  errorUrl = '';
  errorName = '';

  public data$: Observable<Result[]>;
  isTrue: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _serviceShared: ServicesSharedService,
    private router: Router
  ) {
    this.data$ = _serviceShared.sharingObservable;
  }

  ngOnInit(): void {
    this.form();
  }

  form() {
    this.createForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      modified: new FormControl(moment().format('YYYY-MM-DD'), [
        Validators.required,
      ]),
      path: new FormControl('', [Validators.required]),
      extension: new FormControl('', [Validators.required]),
    });
  }
  url(e: any) {
    let divisiones = [];
    divisiones = e.target.value.split('.');

    let extension = [];
    extension = divisiones.splice(-1, 1);

    this.createForm.patchValue({
      path: divisiones.join('.'),
      extension: extension[0],
    });
    this.createForm.value.path === ''
      ? (this.errorUrl = 'Por favor ingrese una URL válida')
      : (this.errorUrl = '');
  }
  submit() {
    console.log(this.isTrue, '');
    this.data$.forEach((response: any) => {
      response.push({
        name: this.createForm.value.name,
        description: this.createForm.value.description,
        modified: this.createForm.value.modified,
        thumbnail: {
          extension: this.createForm.value.extension,
          path: this.createForm.value.path,
        },
      });
      response.unshift(response.pop());
    });

    this.router.navigate(['/characters/list']);
  }

  validar() {
    const even = (element: any) => element.name === this.createForm.value.name;
    this.data$.forEach((response) => {
      this.isTrue = response.some(even);
    });
    this.isTrue
      ? (this.errorName = 'Ya existe un personaje con ese nombre')
      : this.submit();
  }
}
