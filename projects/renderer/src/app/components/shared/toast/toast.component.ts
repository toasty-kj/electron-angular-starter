import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { MessageService } from 'primeng/api'
import { ToastContent, toastType } from './toast-type'

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  providers: [MessageService],
  styleUrl: './toast.component.css',
})
export class ToastComponent implements OnChanges {
  constructor(private messageService: MessageService) {}
  @Input() toastContent: ToastContent = {
    type: toastType.NotDefined,
    message: '',
  }
  toastType = toastType

  // 入力された内容が変更されたらtoastificationを表示する
  ngOnChanges(changes: SimpleChanges) {
    const messageChange = changes['toastContent']
    if (!changes['toastContent'] || messageChange.currentValue.message == '')
      return

    // 初期化の際は2秒待ってから表示する
    if (messageChange.previousValue === undefined) {
      setTimeout(() => {
        this.show()
      }, 1000)
    } else {
      this.show()
    }
  }

  show() {
    this.messageService.add({
      severity: this.toastContent.type,
      detail: this.toastContent.message,
    })
  }

  clear() {
    this.messageService.clear()
  }
}
