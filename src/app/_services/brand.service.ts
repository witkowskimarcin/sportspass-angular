import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrandDto } from '../_model/brand.dto';

// @Injectable({
//   providedIn: 'root'
// })
export class BrandService 
{
    constructor(private http: HttpClient) { 

    }

    getBrandsList(){

        const address = 'admin/brands';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
        
        this.http.get<any>(address, { headers }).subscribe(data => {
            return data;
        });       
    }

    addBrand(brand: BrandDto){

        const address = 'admin/brand/add';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
        
        this.http.post<any>(address, brand, { headers }).subscribe(data => {
            return data;
        });
    }

    deleteBrand(id: number){

        const address = 'admin/brand/'+id+'/delete';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }

        this.http.delete<any>(address, { headers }).subscribe(data => {
            return data;
        });
    }

    editBrand(brand: BrandDto){

        const address = 'admin/brand/edit';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }

        this.http.put<any>(address, brand, { headers }).subscribe(data => {
            return data;
        });
    }

    getBrand(id: number){

        const address = 'admin/brand/'+id;
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }

        this.http.get<any>(address, { headers }).subscribe(data => {
            return data;
        });
    }
}