import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GymOfferDto } from '../_model/gymoffer.dto';
import { BrandDto } from '../_model/brand.dto';
import { GymOfferDetailDto } from '../_model/gymofferdetail.dto';

export class GymOfferService 
{
    constructor(private http: HttpClient) { 

    }


    getGymOfferListByBrandId(id: number){

        const address = 'admin/brand/'+id+'/gymoffers';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        
        this.http.get<any>(address, { headers }).subscribe(data => {
            return data;
        });        
    }

    getGymOffer(id: number){

        const address = 'admin/gymoffer/'+id;
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        
        this.http.get<any>(address, { headers }).subscribe(data => {
            return data;
        });  
    }

    addGymOffer(brandId: number, gymOffer: GymOfferDto){

        const address = 'admin/brand/'+brandId+'/gymoffer/add';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        
        this.http.post<any>(address, gymOffer, { headers }).subscribe(data => {
            return data;
        });  
    }

    editGymOffer(gymOffer: GymOfferDto){

        const address = 'admin/gymoffer/edit';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        
        this.http.put<any>(address, gymOffer, { headers }).subscribe(data => {
            return data;
        });  
    }

    deleteGymOffer(brandId: number, gymOfferId: number){

        const address = 'admin/brand/'+brandId+'/gymoffer/'+gymOfferId+'/delete';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        
        this.http.delete<any>(address, { headers }).subscribe(data => {
            return data;
        });  
    }

    getGymOfferDetailsByGymOffer(id: number){

        const address = 'admin/gymoffer/'+id+'/details';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        
        this.http.get<any>(address, { headers }).subscribe(data => {
            return data;
        }); 
    }

    getGymOfferDetail(id: number){

        const address = 'admin/gymofferdetail/'+id;
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        
        this.http.get<any>(address, { headers }).subscribe(data => {
            return data;
        }); 
    }

    addGymOfferDetail(gymOfferId: number, gymOfferDetail: GymOfferDetailDto){

        const address = 'admin/gymoffer/'+gymOfferId+'/detail/add';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        
        this.http.post<any>(address, gymOfferDetail, { headers }).subscribe(data => {
            return data;
        }); 
    }

    editGymOfferDetail(gymOffer: GymOfferDto){

        const address = 'admin/gymofferdetail/'+gymOffer.id+'/edit';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        
        this.http.put<any>(address, gymOffer, { headers }).subscribe(data => {
            return data;
        }); 
    }

    deleteGymOfferDetail(gymOfferId: number, gymOfferDetailId: number){

        const address = 'admin/gymOffer/'+gymOfferId+'/detail/'+gymOfferDetailId+'/delete';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        
        this.http.delete<any>(address, { headers }).subscribe(data => {
            return data;
        }); 
    }
}