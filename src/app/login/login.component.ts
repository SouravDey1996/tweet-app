import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForgetPassPopupComponent } from './forget-pass-popup/forget-pass-popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openModal(){
    const dialogRef = this.dialog.open(ForgetPassPopupComponent,{
      width: '500px',
    });
  }
}
