import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { UserItem, UserItemType } from 'src/app/model/items';
import { UserService } from 'src/app/services/user/user.service';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-add-log-item-dialog',
  templateUrl: './add-log-item-dialog.component.html',
  styleUrls: ['./add-log-item-dialog.component.scss']
})
export class AddLogItemDialogComponent {
  private selectedUserItem: UserItem;
  
  constructor (
    private userService: UserService,
    private appService: AppService,
  ) {}

  public userItemSelected(userItem: UserItem, userItemType: UserItemType): void {
    this.selectedUserItem = userItem;
  }

  public addNewLogItem(): void {
    const selectedEpochLog = this.userService.user.log[this.userService.selectedEpoch];
    this.userService.getUserFirestoreDocument().update(this.appService.convertCustomObjectToObject({
      log: {
        ...this.userService.user.log,
        [this.userService.selectedEpoch]: [...(selectedEpochLog ? selectedEpochLog : []), {
          ...this.selectedUserItem,
          servings: 1
        }]
      }
    }));
  }
}

@Component({
  template: '',
})
export class AddLogItemDialogEntryComponent implements OnDestroy {
  private redirectWhenClosedSubscription: Subscription;

  constructor(
    private matDialog: MatDialog, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    const addLogItemDialog = this.matDialog.open(AddLogItemDialogComponent);
    this.redirectWhenClosedSubscription = addLogItemDialog.afterClosed().subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

  ngOnDestroy() {
    this.redirectWhenClosedSubscription.unsubscribe();
  }
}
