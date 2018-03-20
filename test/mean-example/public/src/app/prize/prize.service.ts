import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Prize } from './prize';

import "rxjs";
import { Observable } from 'rxjs';

@Injectable()
export class PrizeService {

  constructor(
    private _http:Http 
  ) { }

  create(prize: Prize) {
    return this._http.post('/prizes', prize)
      .map(data => data.json()).toPromise()
  }

  destroy(prize: Prize) {
    return this._http.delete('/prizes/' + prize._id)
    .map(data => data.json()).toPromise()
  }

  update(prize: Prize) {
    return this._http.put('/prizes/' + prize._id, prize)
    .map(data => data.json()).toPromise()
  }

  getPrizes() {
    return this._http.get('/prizes')
    .map(data => data.json()).toPromise()
  }

  getPrizesByBrand(brand) {
      return this._http.get('/prizes/'+brand)
          .map(data => data.json()).toPromise()
  }

  getPrize(prize: Prize) {
    return this._http.get('/prizes/' + prize._id)
    .map(data => data.json()).toPromise()
  }
}
