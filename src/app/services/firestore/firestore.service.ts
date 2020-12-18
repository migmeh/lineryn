import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  //Crea un nuevo gato
  public createCat(data: {email: string, nombre: string, mensaje:string}) {
    return this.firestore.collection('usuarios').add(data);
  }

  //Actualiza un gato
  public updateCat(documentId: string, data: any) {
    return this.firestore.collection('usuarios').doc(documentId).set(data);
  }


  /*  public deleteCat(documentId: string) {
      return this.firestore.collection('cats').doc(documentId).delete();
    }*/
}

