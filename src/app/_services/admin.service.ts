import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../_model/user.dto';
import { RoleDto } from '../_model/role.dto';
import { BrandDto } from '../_model/brand.dto';
import { GymOfferDto } from '../_model/gymoffer.dto';
import { GymOfferDetailDto } from '../_model/gymofferdetail.dto';
import { GymPassDto } from '../_model/gympass.dto';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminService
{
    constructor(private http: HttpClient) {

    }

    // ROLE

    getRoles(){

        const address = 'admin/roles';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }

        return this.http.get<any>(address, { headers });
    }

    // !ROLE

    // USER

    addRoleToUser(userId:number, role: RoleDto){

        const address = 'admin/user/'+userId+'/role/add';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.post<any>(address, role, { headers });
    }

    deleteRoleFromUser(userId: number, roleId: number){

        const address = 'admin/user/'+userId+'/role/'+roleId+'/delete';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.delete<any>(address, { headers });
    }

    disActiveAccount(id: number){

        const address = 'admin/user/'+id+'disactive';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.put<any>(address, { headers });
    }

    getUsersByRole(id: number){

        const address = 'admin/role/'+id+'/users';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.post<any>(address, { headers });
    }

    getAdmins(){

        const address = 'admin/admins';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.get<any>(address, { headers });
    }

    getBrandByOwner(id: number) : Observable<BrandDto>{

        const address = 'admin/user/'+id+'/brands';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.get<any>(address, { headers });
    }

    // !USER

    // BRAND

    getBrandsList() : Observable<BrandDto[]>{

        const address = 'admin/brands';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.get<any>(address, { headers });
    }

    addBrand(brand: BrandDto){

        const address = 'admin/brand/add';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.post<any>(address, brand, { headers });
    }

    deleteBrand(id: number){

        const address = 'admin/brand/'+id+'/delete';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.delete<any>(address, { headers });
    }

    editBrand(brand: BrandDto){

        const address = 'admin/brand/edit';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.put<any>(address, brand, { headers });
    }

    getBrand(id: number){

        const address = 'admin/brand/'+id;
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }

        return this.http.get<any>(address, { headers });
    }

    // !BRAND

    // GYMOFFER

    getGymOfferListByBrandId(id: number) : Observable<GymOfferDto[]>{

        const address = 'admin/brand/'+id+'/gymoffers';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.get<any>(address, { headers });
    }

    getGymOffer(id: number){

        const address = 'admin/gymoffer/'+id;
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.get<any>(address, { headers });
    }

    addGymOffer(brandId: number, gymOffer: GymOfferDto){

        const address = 'admin/brand/'+brandId+'/gymoffer/add';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.post<any>(address, gymOffer, { headers });
    }

    editGymOffer(gymOffer: GymOfferDto){

        const address = 'admin/gymoffer/edit';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.put<any>(address, gymOffer, { headers });
    }

    deleteGymOffer(brandId: number, gymOfferId: number){

        const address = 'admin/gymoffer/'+gymOfferId+'/delete';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.delete<any>(address, { headers });
    }

    getGymOfferDetailsByGymOffer(id: number){

        const address = 'admin/gymoffer/'+id+'/details';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.get<any>(address, { headers });
    }

    getGymOfferDetail(id: number){

        const address = 'admin/gymofferdetail/'+id;
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.get<any>(address, { headers });
    }

    addGymOfferDetail(gymOfferId: number, gymOfferDetail: GymOfferDetailDto){

        const address = 'admin/gymoffer/'+gymOfferId+'/gymofferdetail/add';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.post<any>(address, gymOfferDetail, { headers });
    }

    editGymOfferDetail(oid: number, gymOfferDetail: GymOfferDetailDto){

        const address = 'admin/gymoffer/'+oid+'/gymofferdetail/'+gymOfferDetail.id+'/edit';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.put<any>(address, gymOfferDetail, { headers });
    }

    deleteGymOfferDetail(gymOfferId: number, gymOfferDetailId: number){

        const address = 'admin/gymoffer/'+gymOfferId+'/detail/'+gymOfferDetailId+'/delete';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.delete<any>(address, { headers });
    }

    // !GYMOFFER

    // GYMPASSES

    getGymPassesOfUser(id: number){

        const address = 'admin/user/'+id+'/gympasses';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.get<any>(address, { headers });
    }

    deleteGymPassFromUser(uid: number, gpid: number){

        const address = 'admin/user/'+uid+'/gympass/'+gpid+'/delete';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.delete<any>(address, { headers });
    }

    getGymPass(id: number){

        const address = 'admin/gympass/'+id;
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.get<any>(address, { headers });
    }

    addGymPassToUseru(id: number, gymPass: GymPassDto){

        const address = 'admin/user/'+id+'/gympass/add';
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

        return this.http.post<any>(address, { headers });
    }

    // !GYMPASSES
}
