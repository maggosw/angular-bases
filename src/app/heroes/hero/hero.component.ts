import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;
  public name2:string = 'Spiderman';
  public age2: number = 20;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

getHeroDescription():string{

  return `${this.name} - ${this.age}`;
}

changeHero():void{

  this.name = this.name2;
}

changeAge(): void{
  this.age = this.age2;
}

resetForm(): void{
  this.name = 'ironman';
  this.age = 45;
}



}
