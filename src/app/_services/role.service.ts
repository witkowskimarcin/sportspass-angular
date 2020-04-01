import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoleDto } from '../_model/role.dto';

export class RoleService 
{
    constructor(private http: HttpClient) { 

    }

    getRoles(){

        const address = 'admin/roles';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
        
        this.http.get<any>(address, { headers }).subscribe(data => {
            return data;
        });  
    }

}