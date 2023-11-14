import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-por-url',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './por-url.component.html',
    styleUrl: './por-url.component.css'
})
export class PorUrlComponent implements AfterViewInit {
    constructor() { }
    ngAfterViewInit(): void {
        Swal.fire({
            title: "Desplázate hasta arriba",
            text: "Veras los cambios del componente llamado",
            icon: "info",
            iconColor: "#016cf0",
            confirmButtonColor: "#f0c001",
            confirmButtonText: "Aceptar"
        });
    }
}
