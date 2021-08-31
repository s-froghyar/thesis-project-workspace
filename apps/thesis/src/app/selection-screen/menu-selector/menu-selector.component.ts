/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { SettingOption } from '@somaf-ws/utils';
import { ColorPaletteService } from '../../core/color-palette.service';

@Component({
  selector: 'somaf-ws-menu-selector',
  templateUrl: './menu-selector.component.html',
  styleUrls: ['./menu-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: MenuSelectorComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: MenuSelectorComponent
    }
  ]
})
export class MenuSelectorComponent implements ControlValueAccessor {
  private _items: SettingOption[] = [];
  get items(): SettingOption[] {
    return this._items;
  }
  @Input() set items(v: SettingOption[]) {
    this._items = v;
  }

  selected!: SettingOption;
  touched = false;
  disabled = false;
  
  optionBg;

  onChange = (v) => {};

  onTouched = () => {};


  
  constructor(readonly colors: ColorPaletteService) {
    const complColor = this.colors.getColorHarmony('split-complementary').secondary;
    this.optionBg = `hsl(${complColor.hue}, ${complColor.saturation}%, ${complColor.light}%)`
  }

  writeValue(val: SettingOption) {
    this.selected = val;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  selectItem(item: SettingOption): void {
    this.markAsTouched();
    this.selected = Object.assign({}, {...item, selected: true});
    this._items.forEach(f => {
      if (f.name === item.name) {
        f.selected = true;
      } else {
        f.selected = false;
      }
    });
    this.onChange(this.selected);
  }
  validate(control: AbstractControl): ValidationErrors | null {
    if (Array.isArray(control.value) || control.value === null || control.value === undefined) {
      return {mustSetSelected: true}
    }
    return null;
  }

}
