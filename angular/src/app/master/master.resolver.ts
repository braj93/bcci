import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AdminService } from '../core';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MasterResolver implements Resolve<any> {
  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.adminService.getmasterList()
    .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
