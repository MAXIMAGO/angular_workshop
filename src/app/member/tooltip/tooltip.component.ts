import { Component, OnInit, ViewChild, ElementRef, Inject, HostListener } from '@angular/core';
import { IToolTipConfig } from './tooltip-config.interface';

@Component({
  selector: 'th-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  public position: { top: string; left: string } = { top: '', left: '' };

  @ViewChild('tooltip') private _tooltipContainer: ElementRef;
  @HostListener('window:resize')
  windowResize() {
    this.positionTooltip();
  }

  constructor(@Inject('tooltipConfig') private _config: IToolTipConfig) {}

  ngOnInit() {
    this.positionTooltip();
  }

  private positionTooltip() {
    const hostRect = this._config.host.getBoundingClientRect();
    const tooltipRect = this._tooltipContainer.nativeElement.getBoundingClientRect();
    this.position = {
      top: `${hostRect.top - tooltipRect.height}px`,
      left: `${hostRect.left + (hostRect.width / 2) - (tooltipRect.width / 2)}px`
    };
  }
}
