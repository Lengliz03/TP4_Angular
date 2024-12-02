import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messages: string[] = [];  // Tableau des messages

  constructor() { }

  // Récupérer les messages
  getMessages(): Observable<string[]> {
    return of(this.messages);
  }

  // Ajouter un message
  addMessage(message: string): void {
    this.messages.push(message);
  }

  // Supprimer le dernier message
  removeLastMessage(): void {
    this.messages.pop();
  }
}
