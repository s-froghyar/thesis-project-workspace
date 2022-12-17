import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { FileDropDirective } from './file-drop.directive';

@Component({
  selector: 'somaf-ws-file-upload',
  standalone: true,
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  imports: [CommonModule, FileDropDirective],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FileUploadComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: FileUploadComponent,
    },
  ],
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  errorTxt: string | null = null;

  touched = false;
  disabled = false;

  onChange = (v: any) => {};
  onTouched = () => {};

  writeValue(val: File) {
    this.selectedFile = val;
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

  validate(_: AbstractControl): ValidationErrors | null {
    return this.errorTxt === null ? null : { noCorrectAudioFormat: true };
  }

  upload(event: Event | File): void {
    if (event instanceof File) {
      this.handleFile(event);
    } else {
      const target = event.target as HTMLInputElement;
      const files = target.files as FileList;
      this.handleFile(files[0]);
    }
  }
  private handleFile(f: File): void {
    console.log(f);
    if (f.type === 'audio/x-wav') {
      this.selectedFile = f;
      this.errorTxt = null;
      this.onChange(f);
    } else {
      this.errorTxt = `Format (${f.type}) is not supported. Supported formats are: 'audio/x-wav'`;
    }
  }
}
