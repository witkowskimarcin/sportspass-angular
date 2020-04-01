import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {GymOfferDetailDto} from '../_model/gymofferdetail.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gym-offer-detail',
  templateUrl: './gym-offer-detail.component.html',
  styleUrls: ['./gym-offer-detail.component.css']
})
export class GymOfferDetailComponent implements OnInit {

  form: FormGroup;
  god: GymOfferDetailDto;
  bid: number;
  oid: number;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {

    this.bid = parseInt(this.route.snapshot.paramMap.get('bid'));
    this.oid = parseInt(this.route.snapshot.paramMap.get('oid'));
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.adminService.getGymOfferDetail(this.id).subscribe(
      res => {
        this.god = res;
        this.form = this.formBuilder.group({
          text: [this.god.text, Validators.required],
          description: [this.god.description],
          price: [this.god.price, Validators.required],
          months: [this.god.months, Validators.required]
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    const detail = new GymOfferDetailDto();
    detail.text = this.form.value.text;
    detail.months = this.form.value.months;
    detail.description = this.form.value.description;
    detail.price = this.form.value.price;
    detail.id = this.id;
    this.adminService.editGymOfferDetail(this.oid, detail).subscribe(res => {

      },
      err => {
        console.log(err);
      });;

    this.router.navigate(['brand/'+this.bid+'/offer/'+this.oid+'/details']);
  }

}
