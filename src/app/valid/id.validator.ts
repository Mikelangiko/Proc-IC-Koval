import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function idValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const isValid = /^\d+$/.test(value);
    return isValid ? null : { invalidId: 'ID має складатися лише з цифр' };
  };
}
