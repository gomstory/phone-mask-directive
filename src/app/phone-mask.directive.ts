import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  forwardRef,
  HostListener
} from "@angular/core";

import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor,
  Validator,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";

@Directive({
  selector: "[phoneMask]",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneMaskDirective),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneMaskDirective),
      multi: true
    }
  ]
})
export class PhoneMaskDirective
  implements OnInit, OnDestroy, ControlValueAccessor, Validator {
  public onChange = (_: any) => {};
  public onTouch = () => {};

  constructor(private el: ElementRef) {
    el.nativeElement.setAttribute("maxlength", 12);
  }

  writeValue(value: string): void {
    const realVal = this.removeMask(value);
    this.el.nativeElement.value = this.applyMask(value);
    this.onChange(realVal);
  }

  @HostListener("input", ["$event"])
  public onInput(e: KeyboardEvent): void {
    const el: HTMLInputElement = e.target as HTMLInputElement;
    const realVal = this.removeMask(el.value);
    this.el.nativeElement.value = this.applyMask(el.value);
    this.onChange(realVal);
  }

  applyMask(value: string) {
    return value.replace(/^(\d{3})(\d{3})(\d{0,4})$/g, "$1-$2-$3");
  }

  removeMask(value: string) {
    return value.replace(/\-/g, "");
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }

  validate(c: AbstractControl): ValidationErrors {
    const len = c.value.length;
    return len < 10 || len > 10 ? { len: false } : null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    // throw new Error("Method not implemented.");
  }
}
