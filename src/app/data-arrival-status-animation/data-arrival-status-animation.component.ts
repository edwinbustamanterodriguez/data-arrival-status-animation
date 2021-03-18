import {Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild} from '@angular/core';
import {EnumAnimationState} from "./enum-animation-state";

@Component({
  selector: 'app-data-arrival-status-animation',
  templateUrl: './data-arrival-status-animation.component.html',
  styleUrls: ['./data-arrival-status-animation.component.scss']
})
export class DataArrivalStatusAnimationComponent implements OnInit, OnChanges {


  @ViewChild('preloaderCore', {static: true}) preloaderCoreRef: ElementRef;

  @Input() animationState = EnumAnimationState.stop;

  @Input() animationColor: string;

  @Input() backgroundAnimationColor: string;

  private colorWrapperAnimation = document.querySelector('body');

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.removeClass(this.preloaderCoreRef.nativeElement, 'preloaderCore');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.colorWrapperAnimation.style.setProperty('--animationColor', this.animationColor ? this.animationColor : '#063970');
    this.colorWrapperAnimation.style.setProperty('--backgroundAnimationColor', this.backgroundAnimationColor ? this.backgroundAnimationColor : '#abdbe3');

    if (this.animationState === EnumAnimationState.start) {
      this.renderer.addClass(this.preloaderCoreRef.nativeElement, 'preloaderCore');
    } else {
      this.renderer.removeClass(this.preloaderCoreRef.nativeElement, 'preloaderCore');
    }
  }
}
