import { Component, onInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['app/css/dashboard.component.css'],
})


export class DashBoardComponent {
    heroes: Hero[] = [];
    constructor(
      private router: Router,
      private heroService: HeroService) {
    }

    ngOnInit() {
      this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1,5));
    }
    gotoDetail(hero:Hero){
      let link = ['HeroDetail', { id: hero.id }];
      this.router.navigate(link);
    }
}




 }
