import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  // app title
  title = 'Handson';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe();
  }

  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '200px',
      data: {}
    });

    dialogRef.afterClosed().subscribe();
  }
}
