import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { AccountsComponent } from '../accounts.component';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {}

  @Output()
  accountAdded = new EventEmitter<{ name: string; status: string }>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.loggingService.logAccountAdded(accountName, accountStatus);
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
  }
}
