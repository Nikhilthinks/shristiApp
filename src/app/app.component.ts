import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconRegistry} from '@angular/material/icon';
import {AddCardModalComponent} from './components/add-card-modal/add-card-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private matDialog: MatDialog) {

  }
  title = 'my-app';
  addTile() {
   this.matDialog.open(AddCardModalComponent);
  }
}
