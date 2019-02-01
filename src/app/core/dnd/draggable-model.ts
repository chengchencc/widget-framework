import { DropzoneDirective } from './dropzone.directive';
export interface DragEvent{
    event:PointerEvent,
    data?:any,
    dropzone?:DropzoneDirective
  }