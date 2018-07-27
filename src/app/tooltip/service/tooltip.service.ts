import { Subject, Observable } from 'rxjs';
import { IToolTipConfig } from './../tooltip-config.interface';
import { Injectable } from '@angular/core';

export interface ITooltipShowEvent {
  config: IToolTipConfig;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  public get onShow(): Observable<ITooltipShowEvent> {
    return this._showSubject.asObservable();
  }

  public get onClear(): Observable<any> {
    return this._clearSubject.asObservable();
  }


  private _showSubject: Subject<ITooltipShowEvent> = new Subject();
  private _clearSubject: Subject<any> = new Subject();

  constructor() { }

  public show(config: IToolTipConfig, content: string) {
    this._showSubject.next({ config, content });
  }

  public clear() {
    this._clearSubject.next();
  }
}
