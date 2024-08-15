import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JuanFernandoComponent } from './componente/juanFernando/juanFerernando.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JuanFernandoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DesarrolloJIC';
}
