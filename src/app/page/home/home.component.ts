import { Component } from '@angular/core';
import { PageBase } from 'src/app/pagebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends PageBase {

  constructor() { 
    super();
  }
}
