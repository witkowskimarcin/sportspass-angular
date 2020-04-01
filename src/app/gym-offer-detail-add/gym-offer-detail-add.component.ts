import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {BrandDto} from '../_model/brand.dto';
import {GymOfferDetailDto} from '../_model/gymofferdetail.dto';

@Component({
  selector: 'app-gym-offer-detail-add',
  templateUrl: './gym-offer-detail-add.component.html',
  styleUrls: ['./gym-offer-detail-add.component.css']
})
export class GymOfferDetailAddComponent implements OnInit {

  form: FormGroup;
  bid: number;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      text: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      months: ['', Validators.required]
    });

    this.bid = parseInt(this.route.snapshot.paramMap.get('bid'));
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  onSubmit() {
    const detail = new GymOfferDetailDto();
    detail.text = this.form.value.text;
    detail.months = this.form.value.months;
    detail.description = this.form.value.description;
    detail.price = this.form.value.price;
    this.adminService.addGymOfferDetail(this.id, detail).subscribe(res => {
        this.router.navigate(['brand/'+this.bid+'/offer/'+this.id+'/details']);
      },
      err => {
        console.log(err);
      });;
  }
}
