import {Component} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';


@Component({
    providers: [HeroService],
    selector: 'my-app',
    template: `

    <h1>{{title}}</h1>
    
    <h2>Heroes</h2>
    <ul class="heroes">
        <li *ngFor="let hero of this.heroes" 
            (click)="onSelect(hero)"
            [class.selected]="hero === selectedHero"
            >
            <span class="badge">{{hero.id}}</span> {{hero.name }}
        </li> 
    </ul>

    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    
`
})

export class AppComponent implements OnInit{
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    onSelect = (hero: Hero):void => {
        this.selectedHero = hero;
    }
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit():void{
        this.getHeroes();
    }

    constructor(private heroService: HeroService){}
}