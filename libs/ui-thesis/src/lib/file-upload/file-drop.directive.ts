import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[somafWsFileDrop]',
  standalone: true,
})
export class FileDropDirective {
  @Output() fileDropped = new EventEmitter<File>();
  @HostBinding('class.over') private classOver = false;
  // Dragover Event
  @HostListener('dragover', ['$event']) dragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.classOver = true;
  }
  // Dragleave Event
  @HostListener('dragleave', ['$event']) public dragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.classOver = false;
  }
  // Drop Event
  @HostListener('drop', ['$event']) public drop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.classOver = false;
    const files = event.dataTransfer.files as FileList;
    this.fileDropped.emit(files[0]);
  }
}
