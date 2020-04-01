import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {BrandDto} from '../_model/brand.dto';
import {GymOfferDto} from '../_model/gymoffer.dto';

@Component({
  selector: 'app-gymoffer-add',
  templateUrl: './gymoffer-add.component.html',
  styleUrls: ['./gymoffer-add.component.css']
})
export class GymOfferAddComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {

    this.id = parseInt(this.route.snapshot.paramMap.get('bid'));

    this.form = this.formBuilder.group({
      description: ['', Validators.required],
      location: ['', Validators.required],
      street: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const go = new GymOfferDto();
    go.description = this.form.value.description;
    go.location = this.form.value.location;
    go.street = this.form.value.street;
    this.adminService.addGymOffer(this.id, go).subscribe(res => {
        this.router.navigate(['brand/'+this.id+'/offers']);
      },
      err => {
        console.log(err);
      });;


  }
}
