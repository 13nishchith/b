import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'InActive',
    },
    {
      name: 'Secret Account',
      status: 'Dormant',
    },
  ];

  constructor() {}

  onAccountAdded(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
  }
  onAccountDeleted(accountName: string) {
    // console.log('Account Deleted: ' + accountName);
    // this.accounts[id] = null;
    this.accounts = _.without(
      this.accounts,
      _.findWhere(this.accounts, {
        name: accountName,
      })
    );
  }
  ngOnInit(): void {}
  onStatusChange(updatedInfo: { id: number; status: string }) {
    this.accounts[updatedInfo.id].status = updatedInfo.status;
  }
}
