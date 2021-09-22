import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {
  mode = 'pomodoro';
  message: string;
  pomodoroCount = 0;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  switchToPomodoro(): void {
    this.mode = 'pomodoro';
  }

  /**
   * Switches the timer mode to a short break. (5 mins)
   */
  switchToShortBreak(): void {
    this.mode = 'short';
  }

  /**
   * Switches the timer mode to a long break. (10 mins)
   */
  switchToLongBreak(): void {
    this.mode = 'long';
  }

  /**
   * Called on completion of the timer, passed the modal to be displayed.
   */
  onTimerComplete(content): void {
    // Check what mode we are in to display a appropriate message in the modal.
    switch (this.mode) {
      case 'pomodoro':
        // Increment the counter.
        this.pomodoroCount += 1;
        if (this.pomodoroCount % 2 === 0) {
          this.message = 'Time to take a long break!';
        } else {
          this.message = 'Time to take a short break!';
        }
        break;
      case 'short':
        this.message = 'Time to get back to work!';
        break;
      case 'long':
        this.message = 'Time to get back to work!';
        break;
    }
    // Open the modal and then on close change the timer to the opposite mode. (Pomodoro -> Break etc.)
    this.modalService.open(content).result.then((result) => this.onModalDismissed(), (reason) => this.onModalDismissed());
  }

  onModalDismissed() {
    if (this.mode === 'short' || this.mode === 'long') { // If we have just had a break, back to work.
      this.mode = 'pomodoro';
    } else if (this.mode === 'pomodoro' && this.pomodoroCount % 2 === 0) { // If we have worked 2 pomodoros then long break.
      this.mode = 'long';
    } else { // Else have a short break.
      this.mode = 'short';
    }
  }
}
