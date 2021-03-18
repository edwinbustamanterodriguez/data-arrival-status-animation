import {Component} from '@angular/core';
import {EnumAnimationState} from "./data-arrival-status-animation/enum-animation-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  animationState = EnumAnimationState.stop;
  animationColor = '#063970';
  backgroundAnimationColor = '#abdbe3';

  start(): void {
    this.animationState = EnumAnimationState.start;
  }

  stop(): void {
    this.animationState = EnumAnimationState.stop;
  }

  animationColorChange($event: any): void {
    if ($event.target.value) {
      this.animationColor = $event.target.value;
    }
  }

  backgroundAnimationColorChange($event: any): void {
    if ($event.target.value) {
      this.backgroundAnimationColor = $event.target.value;
    }
  }
}
