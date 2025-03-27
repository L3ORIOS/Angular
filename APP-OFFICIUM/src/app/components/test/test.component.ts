import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template: '<p>{{ testMessage }}</p>',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  testMessage: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTest().subscribe(
      (data) => {
        this.testMessage = data; // Mostrar el mensaje recibido
        console.log("Entro");
      },
      (error) => {
        console.error('Error al llamar a /test:', error);
      }
    );
  }

}
