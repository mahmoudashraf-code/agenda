import { Component } from '@angular/core';
import { DatajService } from '../dataj.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public a:DatajService) {}

  
}
