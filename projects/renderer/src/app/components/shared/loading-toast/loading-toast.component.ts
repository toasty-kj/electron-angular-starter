import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { MessageService } from 'primeng/api'

@Component({
  selector: 'loading-toast',
  templateUrl: './loading-toast.component.html',
  providers: [MessageService],
  styleUrl: './loading-toast.component.css',
})
export class LoadingToastComponent implements OnChanges {
  constructor(private messageService: MessageService) {}
  @Input() content = ''
  @Input() isLoading = false

  ngOnChanges(changes: SimpleChanges) {
    const isLoadingChange = changes['isLoading']
    if (!changes['isLoading']) return

    if (isLoadingChange.currentValue == true) {
      // 初期化の際は1秒待ってから表示する
      if (isLoadingChange.previousValue === undefined) {
        setTimeout(() => {
          this.show()
        }, 1000)
      } else {
        this.show()
      }
    }

    // 以前がロード中で現在が完了の際は通知を閉じる
    if (
      isLoadingChange.previousValue == true &&
      isLoadingChange.currentValue == false
    ) {
      this.clear()
    }
  }

  show() {
    this.messageService.add({
      detail: this.content,
      sticky: true,
    })
  }

  clear() {
    this.messageService.clear()
  }
}
