import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
userName:any;
  constructor(public authService: AuthService,private toastr:ToastrService,private route:Router) { }

  ngOnInit(): void {
    

  }
  loggedIn(){
    this.userName=localStorage.getItem('token');
    // console.log("username::",this.userName);
    // console.log(this.authService.loggedIn());
    return this.authService.loggedIn();
  }

  logout(){
    const token = localStorage.removeItem('token');
    this.userName='';
    this.toastr.success('Logged Out!');
    this.route.navigate(['/login']);
  }
}
