import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor() { }
sure:string="";
  ngOnInit() {
  }
  save(a,b,c)
  {
    if(b!=c)
      this.sure="كلمتين المرور غير متطابقتين";
  }

}
