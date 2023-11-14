//cSpell:disable
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PorSelectorComponent } from './components/por-selector/por-selector.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterOutlet,
        RouterLinkActive,
        PorSelectorComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'proyecto';
    soyUnBoleano: Boolean = false
    listaPeliculas : any[] = [
        {id: 1, nombre: 'Wall-e', img: 'assets/img/peliculas/walle.jpeg'},
        {id: 2, nombre: 'Loki', img: 'assets/img/peliculas/loki.jpeg'},
        {id: 3, nombre: 'WandaVision', img: 'assets/img/peliculas/wanda.jpeg'},
        {id: 4, nombre: 'Deadpool', img: 'assets/img/peliculas/deadpool.jpeg'},
        {id: 5, nombre: 'MoonKnight', img: 'assets/img/peliculas/moon.jpeg'},
    ]

    constructor() { }

    cambiarBoleano() {
        this.soyUnBoleano = !this.soyUnBoleano;
    }
}
