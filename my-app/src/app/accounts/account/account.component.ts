import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService],
})
export class AccountComponent implements OnInit {
  @Input()
  account: {
    name: string;
    status: string;
  } = {
    name: '',
    status: '',
  };
  constructor(private loggingService: LoggingService) {}

  @Input()
  id: number = 0;

  @Output()
  accountDeletedEvent = new EventEmitter<string>();

  @Output()
  accountStatusChangeEvent = new EventEmitter<{ id: number; status: string }>();

  ngOnInit(): void {}
  accountDeleted() {
    this.loggingService.logAccountDeleted(this.account.name);
    this.accountDeletedEvent.emit(this.account.name);
  }
  changeStatus(newStatus: string) {
    this.loggingService.logStatusChange(
      this.id,
      this.account.name,
      this.account.status,
      newStatus
    );
    this.accountStatusChangeEvent.emit({
      id: this.id,
      status: newStatus,
    });
  }
}
