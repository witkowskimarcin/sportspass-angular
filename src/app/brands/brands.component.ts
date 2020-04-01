import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands;

  constructor(
    private adminService: AdminService) { }

  ngOnInit(): void {

    this.adminService.getBrandsList().subscribe(res => {

      },
      err => {
        console.log(err);
      });;

    this.getBrandsList();
  }

  getBrandsList(): void {
    this.adminService.getBrandsList()
        .subscribe(data => {
          this.brands = data;
        });
  }
}
