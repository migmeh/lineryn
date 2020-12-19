import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FirestoreService} from "../../services/firestore/firestore.service";
declare var $: any;
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
    mensaje: new FormControl('', Validators.required)
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

      let data = {
        nombre: form.nombre,
        email: form.email,
        mensaje: form.mensaje,
      }

      if(form.nombre!="" && form.email!="" && form.mensaje!=""){
        this.firestoreService.createCat(data).then(() => {

          this.newCatForm.setValue({
            email: '',
            nombre: '',
            mensaje: ''
          });
          $('#enviado').modal('show');
        }, (error) => {
          console.error(error);
        });

      }




  }






  ngOnInit() {

  }


}
