import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';

@Component({
  imports: [RouterOutlet, AgGridAngular],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  rowData = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ];

  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ];
}
