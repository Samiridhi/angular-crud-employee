import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {

  emp:Emp;
  msg:string;
errorMsg:string;
  eid:number;
  constructor(private empService:EmpService, 
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params=>{
      this.eid=parseInt(params.get('peid'));
    })
    this.empService.viewEmployeeById(this.eid).subscribe(
      data=>{
        console.log(data);
        this.emp=data;
        },
        error=>{
          console.log(error); 
          this.errorMsg=error.error.msg;
          this.msg = undefined;
        }      
    );
      

      // this.activatedRoute.paramMap.subscribe(params=>{
      // this.eid = parseInt(params.get('peid'));
      
      // // console.log();
      // this.emp = new Emp();
      // this.emp = this.empService.emps.filter(e=>e.empId===this.eid)[0];
      // // console.log("line 27",this.emp);
      // this.empService.editEmployee(this.emp).subscribe(
      //   data=>{
      //     console.log(data); 
      //     this.msg=data.msg;
      //     this.errorMsg=undefined;
      //   },
      //   error=>{
      //     console.log(error); 
      //       this.errorMsg=error.error.msg;
      //       this.msg = undefined;
      //   }
      // )
      // console.log(this.empService.emps[this.eid]);

    // });
  }

  editEmployee(emp:Emp){
    
    this.empService.editEmployee(this.emp).subscribe();

    setTimeout(()=>{},1000000);
    // console.log(this.empService.emps[this.eid]);
    this.router.navigateByUrl('/view');
  }

}
