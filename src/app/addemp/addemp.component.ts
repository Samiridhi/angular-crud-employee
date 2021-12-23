import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
emp:Emp=new Emp();
msg:string;
errorMsg:string;

  @ViewChild("frm", {static:false})
  form:NgForm;

  constructor(private empService:EmpService) { }

  ngOnInit() {
  }

  addEmployee(emp:Emp){
    // this.empService.addEmployee(emp);
    // this.msg="employee added successfully";
    // this.emp = new Emp();
    // this.form.reset();

    this.empService.addEmployee(emp).subscribe(
          data=>{console.log(data); 
          this.msg=data.msg;
          this.emp = new Emp();
          this.form.reset();
          this.errorMsg = undefined;
        },
      error=>{
        console.log(error); 
        this.errorMsg=error.error.msg;
        this.msg = undefined;
      }      
    );
  }
}

