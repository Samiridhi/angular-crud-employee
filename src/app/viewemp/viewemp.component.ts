import { Component, OnInit, ViewChild } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {

  
  constructor(private empService:EmpService,
    private router:Router) { 
      this.appendItems();
     }

  searchstr:string='';
  emps:any=[];
  msg:string;
  emp:Emp;
  
  ngOnInit(): void {
    this.empService.getEmployees().subscribe(
      data=>{
        console.log(data); 
        this.emps=data;
        console.log(data[0].empId);
      },
      error=>{console.log(error())
    });

  }

  key:string = 'this.emp.empId';
  reverse:boolean = true;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }


  p:number=1;


  // deleteEmployee(employee: Employee): void {
  //   this.httpClientService.deleteEmployee(employee)
  //     .subscribe( data => {
  //       this.employees = this.employees.filter(u => u !== employee);
  //     })
  // };

  // SingleEmployee(eid){
  //   console.log("Single employee details shown");
  //   this.empService.viewEmployeeById(eid).subscribe(
  //     data=>{
  //       console.log(data);

  //     }
  //   )
  // }

  removeEmp(eid){
    console.log("line 38 in view");
    // alert("this employee will be deleted permantly ")
    this.empService.removeemp(eid).subscribe(
      data=>{
          console.log(data); 
          this.fetchData();
          window.location.reload();
          // this.msg = data.msg;
          // this.emp = new Emp();
          // this.emp = data;
          // setTimeout(()=>{},1000000);
          // this.router.navigateByUrl('/view');
    });
    // this.empService.viewEmployee()
    // .subscribe(
    //   data=>{
    //     console.log(data); 
    //     this.emps=data;
    //     console.log(data[0].empId);
    //   }
    // );
  }


  fetchData() {
    this.empService.getEmployees().subscribe(data =>{
        this.emp = data;
        console.log(data[0].empId);
        console.log("after again fetching data");
        // this.router.navigateByUrl('/view');
    });
}
listArray : string[] = [];
  sum = 20;
  direction = "";
onScrollDown(ev: any) {
  console.log("scrolled down!!", ev);

  this.sum += 20;
  this.appendItems();
  
  this.direction = "scroll down";
}

onScrollUp(ev: any) {
  console.log("scrolled up!", ev);
  this.sum += 20;
  this.prependItems();

  this.direction = "scroll up";
}

appendItems() {
  this.addItems("push");
}

prependItems() {
  this.addItems("unshift");
}

addItems(_method: string) {
  for (let i = 0; i < this.sum; ++i) {
    if( _method === 'push'){
      this.listArray.push([i].join(""));
    }else if( _method === 'unshift'){
      this.listArray.unshift([i].join(""));
    }
  }
}


}
  








//   removeemp(eid){
// console.log('eid'+eid);
//     this.empService.removeemp(eid).subscribe(
//       data=>{
//         console.log(data);
//         this.msg=data.msg;
//       this.emps = this.emps.filter(e=>e.empId!=eid)},
//       error=>{console.log(error)}
//     )
//   }