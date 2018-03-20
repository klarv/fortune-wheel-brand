import { Component, OnInit } from '@angular/core';


import { PrizeService } from '../prize/prize.service';
import { Prize } from '../prize/prize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    prizes: Prize[] = [];

    constructor(
        private _prizeService: PrizeService,
       
    ) {}

    ngOnInit() {
        this.getPrizes();
    }

    getPrizes() {
        this._prizeService.getPrizes()
            .then(prizes => this.prizes = prizes)
            .catch(err => console.log(err));
    }
}

