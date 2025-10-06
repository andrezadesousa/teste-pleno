/**
 * Melhore o código abaixo
 */

import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  template: `
    {{status === 'error' ?
    <div *ngIf="status === 'error'">Erro!</div>
    : status === 'success' ?
    <div *ngIf="status === 'success'">Sucesso!</div>
    :status === 'warning' ?
    <div *ngIf="status === 'warning'">Atenção!</div>
    :
    <div>N/A</div>
    }}
  `,
})
export class ItemComponent {
  status: string;
}
