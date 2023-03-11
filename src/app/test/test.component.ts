import { Component } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  tasks :any=[{
    "todoName":"Task1",
    "status":true
  },
  {
    "todoName":"Task2",
    "status":false
  }
  ]

  ngOnInit(){

  }

  task :any={
    "todoName":'',
    "status":false
  }

  public addTask(){
    console.log("Hello")
    this.tasks.push(this.task);
    this.task={
    }
  }

  public deleteTask(taskName:any)
  {
    const index = this.tasks.indexOf(taskName);
    const x = this.tasks.splice(index, 1);
    // this.tasks.slice(taskName)
    console.log(index)
    console.log(x)
  }

  public finish(item:any){
    const index = this.tasks.indexOf(item);
    this.tasks[index].status=true;
  }
}
