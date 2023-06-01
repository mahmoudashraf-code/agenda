import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatajService {

  constructor(private http:HttpClient,private router: Router) { 
    this.getall();
  }
  news=[];
  news2={
    title:"",
    data:"",
    date:"",
    time:""
  };

  public showicon:Boolean=false;
  public in:number;
  public err:string="";
  getall(){
    this.http.get("assets/data.json").toPromise().then(
      res=>{
        this.news=res as String[];
      }
    )  
  }
  postx(){
    //this.http.post("assets/data.json",this.news2);
    this.http.patch("assets/data.json",this.news2);
    
    this.getall();
  }

  login(a,b){
    for(let i=0;i<this.news.length;i++)
    {
      if(a==this.news[i].username && b==this.news[i].password)
      {
        this.router.navigateByUrl('/news');
        this.showicon=true;
        this.in=i;
        this.err="";
        break;
      }else{
        this.err="من فضلك تحقق من كلمة اسم المستخدم وكلمة المرور";
        this.showicon=false;
      }         
    }   
  } 
}
