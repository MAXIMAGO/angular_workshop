import { TooltipContainerComponent } from './container/tooltip-container.component';
import { TooltipComponent } from './component/tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TooltipDirective,
    TooltipComponent,
    TooltipContainerComponent
  ],
  exports: [
    TooltipContainerComponent,
    TooltipDirective
  ],
  entryComponents: [
    TooltipComponent
  ]

})
export class TooltipModule { }
