import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 




@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
  standalone: true,  // 👈 importante
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule, RouterModule]
})
export class ApiPage {
  frase: string = '';
  autor: string = '';
  carregando: boolean = false;
  frases: any[] = [];

  constructor(private http: HttpClient) {
    this.carregarFrases();
  }

  carregarFrases() {
    this.carregando = true;
    this.http.get<any[]>('https://raw.githubusercontent.com/devmatheusguerra/frasesJSON/main/frases.json')
      .subscribe(
        (dados) => {
          this.frases = dados;
          this.carregando = false;
          this.novaFrase();
        },
        (erro) => {
          this.frase = 'Ops! Não consegui carregar as frases.';
          this.autor = '';
          this.carregando = false;
        }
      );
  }

  novaFrase() {
    if(this.frases.length === 0) return;
    const indice = Math.floor(Math.random() * this.frases.length);
    this.frase = this.frases[indice].frase;
    this.autor = this.frases[indice].autor;
  }
}
