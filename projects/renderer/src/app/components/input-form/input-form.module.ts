import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FileUploaderComponent } from './file-uploader/file-uploader.component'
import { DropdownFormComponent } from './dropdown-form/dropdown-form.component'
import { InputFormComponent } from './input-form/input-form.component'
import { SharedModule } from '../shared/shared.module'
import { FormTitleComponent } from './form-title/form-title.component'

@NgModule({
  declarations: [
    FileUploaderComponent,
    DropdownFormComponent,
    InputFormComponent,
    FormTitleComponent,
  ],
  exports: [
    FileUploaderComponent,
    DropdownFormComponent,
    InputFormComponent,
    FormTitleComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class InputFormModule {}
