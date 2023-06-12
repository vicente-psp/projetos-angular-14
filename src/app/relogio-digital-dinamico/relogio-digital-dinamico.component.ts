import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relogio-digital-dinamico',
  templateUrl: './relogio-digital-dinamico.component.html',
  styleUrls: ['./relogio-digital-dinamico.component.sass']
})
export class RelogioDigitalDinamicoComponent implements OnInit {

  hours = '';
  minutes = '';
  seconds = '';

  constructor() { }

  ngOnInit(): void {
    // serve para iterar a cada n milisegundos
    setInterval(() => {
      const date = new Date();
      this.hours = formatDate(date, 'HH', 'en-US');
      this.minutes = formatDate(date, 'mm', 'en-US');
      this.seconds = formatDate(date, 'ss', 'en-US');
    }, 500);
  }

}
