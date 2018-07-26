import { IToolTipConfig } from './tooltip-config.interface';
import { TooltipComponent } from './tooltip.component';
import {
  Directive,
  Input,
  HostListener,
  OnDestroy,
  ComponentRef,
  ElementRef,
  Renderer2,
  Injector,
  ComponentFactoryResolver,
  ViewContainerRef,
  ReflectiveInjector
} from '@angular/core';

@Directive({
  selector: '[thTooltip]'
})
export class TooltipDirective implements OnDestroy {
  @Input('thTooltip') thTooltip: string;

  private _tooltipRef: ComponentRef<TooltipComponent>;

  @HostListener('mouseenter')
  mouseenter() {
    this.showTooltip();
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.clearTooltip();
  }

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _injector: Injector,
    private _resolver: ComponentFactoryResolver,
    private _vcr: ViewContainerRef
  ) {}

  public ngOnDestroy() {
    this.clearTooltip();
  }

  private showTooltip() {
    if (!this._tooltipRef) {
      const factory = this._resolver.resolveComponentFactory(TooltipComponent);
      const injector = ReflectiveInjector.resolveAndCreate([
        {
          provide: 'tooltipConfig',
          useValue: <IToolTipConfig>{
            host: this._element.nativeElement
          }
        }
      ]);
      const text = this._renderer.createText(this.thTooltip);
      this._tooltipRef = this._vcr.createComponent(factory, 0, injector, [[text]]);
    }
  }

  private clearTooltip() {
    if (!!this._tooltipRef) {
      this._tooltipRef.destroy();
      this._tooltipRef = null;
    }
  }
}
