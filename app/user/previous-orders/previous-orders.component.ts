import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.css'],
})
export class PreviousOrdersComponent implements OnInit {
  kid: any;
  prevOrderData: any;
  constructor(private actobj: ActivatedRoute, private iuonj: UserdataService) {}

  ngOnInit(): void {
    this.kid = localStorage.getItem('userdetails');
    this.kid = JSON.parse(this.kid);
    this.kid = this.kid._id;
    this.iuonj.getPrevOrdersByUser(this.kid).subscribe((data) => {
      //console.log(data);
      this.prevOrderData = data;
    });
  }
}
