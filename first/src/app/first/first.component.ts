import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
public newTask = '';
public arr = [] as any;

public count! : number;
  constructor() { }

  ngOnInit(): void {
  }

  addUser() : void{
    if(this.newTask.length > 1){
      let obj  = {task: this.newTask, check : false};
      this.arr.push(obj);
      this.count = this.arr.length;
      this.newTask = '';
    }else{
      return
    }
   
  }

  
getCountPar(data: number): void{
  this.count = data;
}
}
