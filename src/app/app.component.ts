import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectivasJandrohen';
  condition = true;
  numero_mes!: string;
  vblecolor!: string;
}
