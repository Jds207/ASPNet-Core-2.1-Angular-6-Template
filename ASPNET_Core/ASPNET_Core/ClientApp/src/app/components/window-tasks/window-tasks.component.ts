import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { fadeInOut } from '../../services/animations';
import { BootstrapTabDirective } from "../../directives/bootstrap-tab.directive";
import { AccountService } from "../../services/account.service";
import { Permission } from '../../models/permission.model';

@Component({
  selector: 'app-window-tasks',
  templateUrl: './window-tasks.component.html',
  styleUrls: ['./window-tasks.component.css'],
  animations: [fadeInOut]
})
export class WindowTasksComponent implements OnInit {

  isTaskActivated = true;

  fragmentSubscription: any;

  readonly usersTab = "users";
  readonly taskTab = "tasks";

  @ViewChild("tab")
  tab: BootstrapTabDirective;

  constructor(private route: ActivatedRoute, private accountService: AccountService) {
  }

  ngOnInit() {
    this.fragmentSubscription = this.route.fragment.subscribe(anchor => this.showContent(anchor));

  }

  ngOnDestroy() {
    this.fragmentSubscription.unsubscribe();
  }

  showContent(anchor: string) {
    if (this.isFragmentEquals(anchor, this.usersTab) && !this.canViewTasks)
      return;

    this.tab.show(`#${anchor || this.taskTab}Tab`);
  }

  isFragmentEquals(fragment1: string, fragment2: string) {

    if (fragment1 == null)
      fragment1 = "";

    if (fragment2 == null)
      fragment2 = "";

    return fragment1.toLowerCase() == fragment2.toLowerCase();
  }

  onShowTab(event) {
    let activeTab = event.target.hash.split("#", 2).pop();

   
    this.isTaskActivated = activeTab == this.taskTab;
  }

  get canViewTasks() {
    return this.accountService.userHasPermission(Permission.viewUsersPermission);
  }
}
