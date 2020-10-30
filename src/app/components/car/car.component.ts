import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors: Colors;
  options: string[];
  test:any;
  isEdit:boolean = false;



  constructor() { }

  ngOnInit(): void {
    this.name = "Audi";
    this.speed = 235;
    this.model = "RS8";
    this.colors = {
      car: "Белый",
      salon: "Черный",
      wheels: "Серебряный"
    };
    this.options = ["ABS", "Автопилот", "Автопаркинг"];
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt (option) {
    for(let i = 0; i < this.options.length; i++){
      if(this.options[i] == option){
        this.options.splice(i,1);
        break;
      }
    }
  }

  carSelect(carName) {
    if(carName== 'BMW'){
      this.name = "BMW";
      this.speed = 280;
      this.model = "M5";
      this.colors = {
        car: "Синий",
        salon: "Белый",
        wheels: "Серебристый"
      };
      this.options = ["ABS", "Автопилот", "Автопаркинг"];
    } else if(carName == 'Audi'){
      this.name = "Audi";
      this.speed = 235;
      this.model = "RS8";
      this.colors = {
        car: "Белый",
        salon: "Черный",
        wheels: "Серебрянный"
      };
      this.options = ["Двигатель", "Стеклоочиститель нового поколения", "Освящено пат.Кириллом"];
    }else {
      this.name = "Mercedece";
      this.speed = 180;
      this.model = "C180";
      this.colors = {
        car: "Синий",
        salon: "Сиреневый",
        wheels: "Золотой"
      };
      this.options = ["Система трека", "Круиз контроль", "Мягкая подвеска"];
    }
  }

}
interface Colors {
  car:string,
  salon:string,
  wheels:string
}

