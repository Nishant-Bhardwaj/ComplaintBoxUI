import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  initialMsg : any= " ";

  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(parameter=>{
      this.initialMsg = parameter['res']
      console.log("dashboard : " + this.initialMsg)
    });
  }


}
