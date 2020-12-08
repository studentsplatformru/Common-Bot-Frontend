import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-botbadge',
  templateUrl: './botbadge.component.html',
  styleUrls: ['./botbadge.component.scss'],
})
export class BotbadgeComponent {
  @Input() botName: string;
  @Input() botIcon: string;
  @Input() botDescription: string;
  @Input() botChannels: number;
}
