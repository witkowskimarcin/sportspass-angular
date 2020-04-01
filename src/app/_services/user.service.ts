import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../_model/user.dto';
import { RoleDto } from '../_model/role.dto';

@Injectable({ providedIn: 'root' })
export class UserService 
{
    constructor(private http: HttpClient) { }


}