import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  @Input() title = ''
  @Input() placeholder = ''
  @Input() infoContent = ''
  @Output() inputTitle = new EventEmitter<string>()

  onChangeInputString(event: any) {
    const value = event.target.value
    this.inputTitle.emit(value)
  }
}
