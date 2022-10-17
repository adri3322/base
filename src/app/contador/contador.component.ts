
import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
    <h1>{{title}}</h1>
    <button (click)="sumar()">+1</button>
    <span>{{numero}}</span>
    <button (click)="restar()">-1</button>
    `
})
export class contadorComponent{

    title = 'hola caracola';
    numero=10;

    sumar(){
        this.numero+=1;
    }

    restar(){
        this.numero-=1;
    }
}