import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Daniel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Natalia';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = [
    'Daniel',
    'Natalia',
    'Jesus',
    'Raul',
    'Paula',
    'Laura',
    'Francisco',
  ];

  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  advanceQueue(): void {
    this.clients.shift();
  }

  // KeyValue Pipe

  public person = {
    name: 'Daniel',
    age: '32',
    address: 'C/Piamonte',
  };

  // Async pipe

  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );
}
