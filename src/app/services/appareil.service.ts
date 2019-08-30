import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareilsSubject = new Subject<any[]>();

  private appareils = [];

  constructor(private httpClient: HttpClient) { }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
      this.emitAppareilSubject();
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }
/*
  switchOnAll(): void {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll(): void {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(index: number): void {
    this.appareils[index].status = 'allumé';
  }

  switchOffOne(index: number): void {
    this.appareils[index].status = 'éteint';
  }
*/


  getAppareilById(id: number) {
    return this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
      .put('https://tranquil-garage-95807.firebaseio.com/appareils.json', this.appareils)
      .subscribe(() => {
        console.log('Enregistremeent terminé');
      }, (error) => {
        console.log('Echec sauvegarde ' + error);
      });
  }

  getAppareilsFromServer() {
    this.httpClient.get<any[]>('https://tranquil-garage-95807.firebaseio.com/appareils.json')
      .subscribe((response) => {
        this.appareils = response;
        this.emitAppareilSubject();
      }, (error) => {
        console.log('Erreur chargement ' + error);
      });
  }
}
