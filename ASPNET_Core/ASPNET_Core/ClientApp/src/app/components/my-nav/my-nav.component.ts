import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../../services/account.service';
import { Permission } from '../../models/permission.model';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  appTitle = "CTI Admin";


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private accountService: AccountService) { }

  get canViewCustomers() {
    return this.accountService.userHasPermission(Permission.viewUsersPermission); //eg. viewCustomersPermission
  }

  get canViewProducts() {
    return this.accountService.userHasPermission(Permission.viewUsersPermission); //eg. viewCustomersPermission
  }

  get canViewOrders() {
    return this.accountService.userHasPermission(Permission.viewUsersPermission); //eg. viewCustomersPermission
  }
  }
