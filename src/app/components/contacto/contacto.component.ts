import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FirestoreService} from "../../services/firestore/firestore.service";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public cats = [];

  public documentId = null;
  public currentStatus = 1;
  public newCatForm = new FormGroup({
    email: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    mensaje: new FormControl('')
  });


  constructor(
    private firestoreService: FirestoreService
  ) {
    this.newCatForm.setValue({
      email: '',
      nombre: '',
      mensaje: ''
    });

  }

  public newCat(form, documentId = this.documentId) {

    if (this.currentStatus == 1) {
      let data = {
        nombre: form.nombre,
        email: form.email,
        mensaje: form.mensaje,
      }
      this.firestoreService.createCat(data).then(() => {

        this.newCatForm.setValue({
          email: '',
          nombre: '',
          mensaje: ''
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      let data = {
        nombre: form.nombre,
        url: form.url
      }
      this.firestoreService.updateCat(documentId, data).then(() => {
        this.currentStatus = 1;
        this.newCatForm.setValue({
          email: '',
          nombre: '',
          mensaje: ''
        });
        //console.log('Documento editado exitósamente');
      }, (error) => {
        //console.log(error);
      });
    }
  }






  ngOnInit() {

  }


}
