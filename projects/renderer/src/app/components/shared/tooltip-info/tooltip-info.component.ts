import { Component, Input } from '@angular/core'

@Component({
  selector: 'tooltip-info',
  templateUrl: './tooltip-info.component.html',
  styleUrls: ['./tooltip-info.component.css'],
})
export class TooltipInfoComponent {
  @Input() infoContent = ''
}
