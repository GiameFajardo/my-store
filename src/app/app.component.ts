import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://picsum.photos/200/200',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://picsum.photos/200/200'
    }
  ]
}
