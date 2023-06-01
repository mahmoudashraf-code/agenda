import { Component, OnInit } from '@angular/core';
import { DatajService } from '../dataj.service';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
 
  constructor(public s:DatajService) {
    
   }

  ngOnInit() {
   
  }

}
