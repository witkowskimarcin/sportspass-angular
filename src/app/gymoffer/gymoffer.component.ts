import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AdminService } from '../_services/admin.service';
import { GymOfferDetailDto } from '../_model/gymofferdetail.dto';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GymOfferDto} from '../_model/gymoffer.dto';

@Component({
  selector: 'app-gymoffer',
  templateUrl: './gymoffer.component.html',
  styleUrls: ['./gymoffer.component.css']
})
export class GymOfferComponent implements OnInit {

  gymOfferDetails: GymOfferDetailDto[];
  bid: number;
  id: number;
  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {

    this.bid = parseInt(this.route.snapshot.paramMap.get("bid"));
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));

    this.adminService.getGymOfferDetailsByGymOffer(this.id)
      .subscribe(res => {
        this.gymOfferDetails = res;
      },
        err => {
        console.log(err);
        });

    this.adminService.getGymOffer(this.id)
      .subscribe(res => {

          this.form = this.formBuilder.group({
            description: [res.description, Validators.required],
            location: [res.location, Validators.required],
            street: [res.street, Validators.required]
          });
      },
      err => {
        console.log(err);
      });
  }

  delete(id: number) {
    this.adminService.deleteGymOfferDetail(this.id, id).subscribe(
      res => {

      },
      err => {
        console.log(err);
      });;;
  }

  onSubmit(): void {
    const go = new GymOfferDto();
    go.id = this.id;
    go.description = this.form.value.description;
    go.location = this.form.value.location;
    go.street = this.form.value.street;
    this.adminService.editGymOffer(go).subscribe(
      res => {
        this.router.navigate(['brand/'+this.bid+'/offers']);
      },
      err => {
        console.log(err);
      });;

  }
}
