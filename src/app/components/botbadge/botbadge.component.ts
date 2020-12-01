import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-botbadge',
  templateUrl: './botbadge.component.html',
  styleUrls: ['./botbadge.component.scss']
})
export class BotbadgeComponent {
  @Input('botName') botName: string;
  @Input('botIcon') botIcon: string;
  @Input('botDescription') botDescription: string;
  @Input('botChannels') botChannels: number;
}
