import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-single-employee-details',
  templateUrl: './single-employee-details.component.html',
  styleUrls: ['./single-employee-details.component.css']
})
export class SingleEmployeeDetailsComponent implements OnInit {

  id: number
  employee: Emp
  constructor(private route: ActivatedRoute, private empService:EmpService ) { }

  ngOnInit() :void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Emp();
    this.empService.viewEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }

}
