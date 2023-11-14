import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorSelectorComponent } from '../por-selector/por-selector.component';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [CommonModule, PorSelectorComponent],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {

}
