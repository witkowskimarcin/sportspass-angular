import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../_services/admin.service';
import {BrandDto} from '../_model/brand.dto';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  form: FormGroup;
  name: string;
  image: string | ArrayBuffer;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required]
    });
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
    this.adminService.addBrand(brand).subscribe(res => {
        this.router.navigate(['brands']);
      },
      err => {
        console.log(err);
      });
  }
}
