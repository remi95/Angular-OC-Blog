import { Component } from '@angular/core';
import {Post} from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    new Post(
      'Mon premier post',
      'Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, ' +
      'ulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant',
      0
    ),
    new Post(
      'Mon deuxième post',
      'Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, ' +
      'ulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant',
      2
    ),
    new Post(
      'Mon troisième post',
      'Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, ' +
      'ulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant',
      -3
    ),
  ];
}
