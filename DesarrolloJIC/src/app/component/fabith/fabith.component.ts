import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fabith',
  standalone: true,
  imports: [RouterOutlet, FabithComponent],
  templateUrl: './fabith.component.html',
  styleUrl: './fabith.component.css'
})
export class FabithComponent {

}
