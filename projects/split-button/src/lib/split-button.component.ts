import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { mixinColor, mixinDisabled } from '@angular/material/core';
import { MatMenuPanel } from '@angular/material/menu';
import { SplitButtonType } from './split-button-type.model';


const _SplitButtonMixin = mixinColor(
  mixinDisabled(
    class {
      constructor(public _elementRef: ElementRef) {}
    },
  ),
);


@Component({
  selector: 'mas-split-button',
  templateUrl: './split-button.component.html',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'color'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class MasSplitButton extends _SplitButtonMixin implements OnInit {
  @Input()
  type: SplitButtonType = 'text';


  private _menu: MatMenuPanel | null = null;

  @Input('matMenu')
  get menu(): MatMenuPanel | null {
    return this._menu;
  }
  set menu(menu: MatMenuPanel | null) {
    if (menu === this._menu) {
      return;
    }

    if(menu) {
      menu.xPosition = 'before';
      menu.yPosition = 'below';
    }

    this._menu = menu;
  }

  @Output()
  actionClick: EventEmitter<never> = new EventEmitter<never>();

  @HostBinding('class')
  hostClass = 'mas-split-button';

  @HostBinding('class.mat-unthemed')
  get unthemed() {
    return !this.color;
  }

  @HostBinding('class.mas-split-button--disabled')
  get disabledModifier() {
    return this.disabled;
  }


  constructor(
    elementRef: ElementRef<HTMLElement>,
  ) {
    super(elementRef);
  }

  ngOnInit(): void {
    this.hostClass += ' mas-split-button--' + this.type;
  }

  onActionClick(): void {
    this.actionClick.emit(undefined);
  }
}
