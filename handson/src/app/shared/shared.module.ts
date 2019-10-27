import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [TopMenuComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    TopMenuComponent,
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ]
})
export class SharedModule { }
