import { TooltipService } from './service/tooltip.service';
import { IToolTipConfig } from './tooltip-config.interface';
import { TooltipComponent } from './component/tooltip.component';
import { Directive, Input, HostListener, OnDestroy, ComponentRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[thTooltip]'
})
export class TooltipDirective implements OnDestroy {
  @Input() thTooltip: string;
  @Input() thTooltipDelay = 200;

  private _showSubject: Subject<IToolTipConfig> = new Subject();
  private _showSubscription: Subscription;

  @HostListener('mouseenter')
  mouseenter() {
    this._showSubscription = this._showSubject.pipe(debounceTime(this.thTooltipDelay)).subscribe(config => {
      this.showTooltip(config);
    });
  }

  @HostListener('mousemove', ['$event'])
  mousemove(e: MouseEvent) {
    this._showSubject.next({ position: { x: e.x, y: e.y } });
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.clearTooltip();
  }

  constructor(private tooltipService: TooltipService) {}

  public ngOnDestroy() {
    this.clearTooltip();
  }

  private showTooltip(config: IToolTipConfig) {
    this.tooltipService.show(config, this.thTooltip);
  }

  private clearTooltip() {
    if (!!this._showSubscription) {
      this._showSubscription.unsubscribe();
    }
    this.tooltipService.clear();
  }
}
