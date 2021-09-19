import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  apiResult:any[]=[];
  paramLoop:String[]=['1','2','3','4','5','6','7','8','9','10'];
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  async asyncAwaitCall(){
    
    await this.paramLoop.forEach(async (param:any)=>{
      let result:any=null;
      await this.httpClient.get(`https://jsonplaceholder.typicode.com/todos/${param}`).toPromise().then((res:any)=>{
        result=res.toString();
      });
      this.apiResult.push(result);
    });
    console.log(this.apiResult);
  }

  async asyncAwaitWithForOfLoop(){
    
      for(let i=0;i<this.paramLoop.length;i++){
        let result:any=null;
        await this.httpClient.get(`https://jsonplaceholder.typicode.com/todos/${this.paramLoop[i]}`).toPromise().then((res:any)=>{
          result=res.toString();
        });
        this.apiResult.push(result);
      }
    console.log(this.apiResult);
  }

}
