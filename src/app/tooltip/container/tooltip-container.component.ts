import { TooltipComponent } from './../component/tooltip.component';
import { TooltipService } from '../service/tooltip.service';
import { Component, OnInit, Renderer2, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ReflectiveInjector } from '@angular/core';
import { IToolTipConfig } from '../tooltip-config.interface';

@Component({
  selector: 'th-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.css']
})
export class TooltipContainerComponent implements OnInit {
  private _tooltipRef: ComponentRef<TooltipComponent>;

  constructor(
    tooltipService: TooltipService,
    private _renderer: Renderer2,
    private _resolver: ComponentFactoryResolver,
    private _vcr: ViewContainerRef
  ) {
    tooltipService.onClear.subscribe(() => {
      this.clear();
    });
    tooltipService.onShow.subscribe(e => {
      this.show(e.content, e.config);
    });
  }

  ngOnInit() {}

  private show(content: string, config: IToolTipConfig): void {
    if (!this._tooltipRef) {
      const factory = this._resolver.resolveComponentFactory(TooltipComponent);
      const injector = ReflectiveInjector.resolveAndCreate([
        {
          provide: 'tooltipConfig',
          useValue: config
        }
      ]);
      const text = this._renderer.createText(content);
      this._tooltipRef = this._vcr.createComponent(factory, 0, injector, [[text]]);
    }
  }

  private clear(): void {
    if (!!this._tooltipRef) {
      this._tooltipRef.destroy();
      this._tooltipRef = null;
    }
  }
}
