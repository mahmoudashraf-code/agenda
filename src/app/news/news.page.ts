import { Component, OnInit } from '@angular/core';
import { DatajService } from '../dataj.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})  



export class NewsPage implements OnInit {
  constructor(public ser:DatajService) { 
  }
  ngOnInit(){
  }

  chan(a){
    for(let i=0;i<this.ser.news[this.ser.in].information.length;i++)
      if(this.ser.news[this.ser.in].information[i].title==a)
        alert(this.ser.news[this.ser.in].information[i].title +"\n"+ this.ser.news[this.ser.in].information[i].data +"\n"+
        this.ser.news[this.ser.in].information[i].date +"\n"+ this.ser.news[this.ser.in].information[i].time);
  }
  adddata(index){
    alert(index+"لم تفعل حتى الان");
  }


}
