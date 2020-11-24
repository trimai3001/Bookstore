import { Component } from '@angular/core';
import { PageBase } from 'src/app/pagebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends PageBase {

  constructor() { 
    super();
  }

}
