import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TooltipInfoComponent } from './tooltip-info/tooltip-info.component'
import { ToastModule } from 'primeng/toast'
import { ToastComponent } from './toast/toast.component'
import { LoadingToastComponent } from './loading-toast/loading-toast.component'

@NgModule({
  declarations: [TooltipInfoComponent, ToastComponent, LoadingToastComponent],
  imports: [CommonModule, ToastModule],
  exports: [TooltipInfoComponent, ToastComponent, LoadingToastComponent],
})
export class SharedModule {}
