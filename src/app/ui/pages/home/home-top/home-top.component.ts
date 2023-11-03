import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ENTER_SCALE, TRANSITION_TEXT, TRANSITION_TEXT_ENTER } from 'src/app/ui/animations/transitions/transitions.constants';
import { ViewChild ,Renderer2 } from '@angular/core';
import { ParallaxService } from '../services/parallax.service';


@Component({
  selector: 'app-home-top',
  templateUrl: './home-top.component.html',
  styleUrls: ['./home-top.component.scss'],
  animations: [
    TRANSITION_TEXT,
    TRANSITION_TEXT_ENTER,
    // TRANSITION_AREA_SLIDE,
    // TRANSITION_IMAGE_SCALE,
    ENTER_SCALE
  ]
})
export class HomeTopComponent implements OnInit {
  @ViewChild('elem') elem: ElementRef = {} as ElementRef;
 @ViewChild('elem1') elem1: ElementRef = {} as ElementRef;

 mouseX = 0;
 mouseY = 0;
 top = 60;
 left = 60;
  constructor(private parallaxService: ParallaxService ,private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.parallaxService.applyParallax(this.elem.nativeElement);
    this.renderer.listen(
      'document',
      'mousemove',
      (event: MouseEvent) => {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        // console.log(this.mouseX);

        this.updatePosition();
      }
    );
    // this.parallaxService.applyParallax1(this.elem1.nativeElement);

  }

  updatePosition() {
    this.elem1.nativeElement.style.top = this.mouseY + 'px';
    // console.log(this.elem1.nativeElement.top);
    this.elem1.nativeElement.style.left = this.mouseX + 'px';
  }




  _mAnimTextEnded = false


  ngOnInit(): void {
  }

  _onTextAnimationEnd($event: any) {
    // console.log("_onTextAnimationEnd", $event['toState'])
    if ($event['toState'] == "in") {
      // console.log("_onTextAnimationEnd")
      this._mAnimTextEnded = true
      // this.animAnimation()

    }
  }

}
