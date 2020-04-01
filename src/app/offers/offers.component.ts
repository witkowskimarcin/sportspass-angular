import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AdminService } from '../_services/admin.service';
import { GymOfferDto } from '../_model/gymoffer.dto';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BrandDto} from '../_model/brand.dto';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  bid: number;
  brand: BrandDto;
  gymOffers: GymOfferDto[];

  form: FormGroup;
  name: string;
  image: string | ArrayBuffer;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.bid = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getGymOffersByBrandId(this.bid);

    this.adminService.getBrand(this.bid).subscribe(res => {
        this.brand = res;
        this.form = this.formBuilder.group({
          name: [res.name, Validators.required],
          image: [res.image, Validators.required]
        });
    },
    err => {
      console.log(err);
    });
  }

  getGymOffersByBrandId(bid: number): void {
    this.adminService.getGymOfferListByBrandId(bid)
        .subscribe(data => this.gymOffers = data);
  }

  delete(id: number) {
    this.adminService.deleteGymOffer(this.bid, id).subscribe(res => {

      },
      err => {
        console.log(err);
      });;
  }

  onFileChange(event) {
    // this.loading = false;
    if(event.target.files.length > 0) {
      this.name = this.form.value.name;
      const reader = new FileReader();
      reader.onload = (ev: ProgressEvent) => {
        this.image = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      console.log(this.image);
      this.form.get('image').setValue(this.image);

      setTimeout(() => {
        // this.loading = true;
      }, 1000);
    }
  }

  onSubmit() {
    const brand = new BrandDto();
    brand.name = this.name;
    brand.image = this.image.toString();
    brand.image = brand.image.substring(brand.image.indexOf(',') + 1);
    brand.id = this.bid;
    this.adminService.editBrand(brand).subscribe(res => {

      },
      err => {
        console.log(err);
      });;

    this.router.navigate(['brands']);
  }
}
