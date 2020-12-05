import { Component, OnInit } from '@angular/core';

interface Bot {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-searchbotsort',
  templateUrl: './searchbotsort.component.html',
  styleUrls: ['./searchbotsort.component.scss']
})
export class SearchbotsortComponent implements OnInit {
  selected = 'all';

  bots: Bot[] = [
    {value: 'all', viewValue: 'Все'},
    {value: 'owner', viewValue: 'Владелец'},
    {value: 'editor', viewValue: 'Редактор'},
    {value: 'moderator', viewValue: 'Модератор'}
  ];

  ngOnInit(): void {
  }

}
