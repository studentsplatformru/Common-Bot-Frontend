import { Component, OnInit } from '@angular/core';

interface Bot {
  name: string;
  icon: null;
  description: string;
  channelNumber: number;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  myBots: Bot[] = [
    { name: 'Игорь', icon:null, description:'Отвечает на вопросы, обрабатывает запросы', channelNumber:4 },
    { name: 'Андрюша', icon:null, description:'Генерирует шутки по заданной теме', channelNumber:8 },
    { name: 'Инокентий', icon:null, description:'Знает все новости о политике', channelNumber:3 },
  ]

  ngOnInit(): void {
  }

}
