import { Component, OnInit, ViewChild, ElementRef, Inject, HostListener } from '@angular/core';
import { IToolTipConfig } from '../tooltip-config.interface';

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
    const tooltipRect = this._tooltipContainer.nativeElement.getBoundingClientRect();
    this.position = {
      top: `${this._config.position.y - tooltipRect.height}px`,
      left: `${Math.max(0, this._config.position.x - (tooltipRect.width / 2))}px`
    };
  }
}
