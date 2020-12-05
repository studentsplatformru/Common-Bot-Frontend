import { Component, OnInit } from '@angular/core';

interface Bot {
  botName: string;
  botIcon: string;
  botDescription: string;
  botChannels: number;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  myBots: Bot[] = [
    {
      botName: 'Игорь',
      botIcon: null,
      botDescription: 'Отвечает на вопросы, обрабатывает запросы',
      botChannels: 4,
    },
    {
      botName: 'Андрюша',
      botIcon: null,
      botDescription: 'Генерирует шутки по заданной теме',
      botChannels: 8,
    },
    {
      botName: 'Инокентий',
      botIcon: null,
      botDescription: 'Знает все новости о политике',
      botChannels: 3,
    },
  ];

  allBots: Bot[] = [
    {
      botName: 'Игорь',
      botIcon: null,
      botDescription: 'Отвечает на вопросы, обрабатывает запросы',
      botChannels: null,
    },
    {
      botName: 'Андрюша',
      botIcon: null,
      botDescription: 'Генерирует шутки по заданной теме',
      botChannels: null,
    },
    {
      botName: 'Инокентий',
      botIcon: null,
      botDescription: 'Знает все новости о политике',
      botChannels: null,
    },
    {
      botName: 'Гоша',
      botIcon: null,
      botDescription: 'Принимает заказы вашего интернет-магазина',
      botChannels: null,
    },
    {
      botName: 'Валера',
      botIcon: null,
      botDescription: 'Собирает статистику по каналу',
      botChannels: null,
    },
  ];

  ngOnInit(): void {}
}
