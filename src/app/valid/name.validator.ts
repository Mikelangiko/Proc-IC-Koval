import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const isValid = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]+$/.test(value);
    return isValid ? null : { invalidName: 'Назва має містити лише літери' };
  };
}
