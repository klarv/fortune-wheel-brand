import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { PrizeService } from './prize.service';
import { Prize } from './prize';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./css/layout.css']
})
export class PrizeComponent implements OnInit {
  prizes: Prize[] = [];

  constructor(
      private _prizeService: PrizeService,
      private route: ActivatedRoute
  ) {
      this.route.params.subscribe(params => this.getPrizesByBrand(params['brand_name']));
    }

  ngOnInit() {
  //  this.getPrizes();
  }

  getPrizes() {
    this._prizeService.getPrizes()
      .then(prizes => this.prizes = prizes)
      .catch(err => console.log(err));
  }

  getPrizesByBrand(brand) {
      this._prizeService.getPrizesByBrand(brand)
          .then(prizes => this.prizes = prizes)
          .catch(err => console.log(err));
  }

  create(prize: Prize){
    this._prizeService.create(prize)
        .then(status => this.getPrizes())
      .catch(err => console.log(err));
  }

  destroy(prize: Prize) {
    this._prizeService.destroy(prize)
        .then(status => this.getPrizes())
    .catch(err => console.log(err));
  }

  update(prize: Prize) {
    this._prizeService.update(prize)
        .then(status => this.getPrizes())
    .catch(err => console.log(err));
  }

}
