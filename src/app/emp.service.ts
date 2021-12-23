import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  emps:Emp[] = [];
  num:number=0;

  m1(){
    ++this.num;
  }

  constructor(private http:HttpClient) { 
    // this.emps.push({empId:1001, empFName: "Ram", empLName:"Kumar", empDesignation:"Architect", empPManager: "Aryan"});
    // this.emps.push({empId:1002, empFName: "Ravi", empLName:"Tejas", empDesignation:"Hr", empPManager: "Atul"});
    // this.emps.push({empId:1003, empFName: "Rohit", empLName:"Singh", empDesignation:"Pr", empPManager: "Ayan"});
    // this.emps.push({empId:1004, empFName: "Ravi", empLName:"Patel", empDesignation:"Architect", empPManager: "Ayush"});
    // this.emps.push({empId:1005, empFName: "Ramnya", empLName:"Kumar", empDesignation:"Sales Manager", empPManager: "Abhishek"});
    // console.log("emp service instance....");
  }

  addEmployee(emp:Emp):Observable<any>{
    // this.emps.push(emp);
    return this.http.post("http://localhost:8081/empcrud/addemp",emp );
  }

  viewEmployee():Observable<any>{
    return this.http.get("http://localhost:8081/employee/viewall");

  }

  editEmployee(emp:Emp):Observable<any>{
    return this.http.put("http://localhost:8081/empcrud/editemp", emp);
  }

  removeemp(eid:number):Observable<any>{
console.log(eid)
    return this.http.delete("http://localhost:8081/empcrud/removeemp?empId="+eid);
    // return this.http.delete()
  }

  viewEmployeeById(eid:number):Observable<any>{
    return this.http.get("http://localhost:8081/employee/viewbyid/"+eid);
  }
}