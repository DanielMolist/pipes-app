import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public sortBy: keyof Hero | null = null;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Dar Devil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  setSortBy(value: keyof Hero): void{
    this.sortBy = value;
  }
}
