import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  brands;
  gymOffers;

  constructor(
    private adminService: AdminService) { }

  ngOnInit(): void {

    this.adminService.getBrandsList()

    this.getBrandsList();
  }

  getBrandsList(): void {
    this.adminService.getBrandsList()
        .subscribe(data => {
          this.brands = data;
        });
  }
}
