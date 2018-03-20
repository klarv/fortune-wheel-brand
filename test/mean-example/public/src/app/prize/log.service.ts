import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Prize } from './prize';


import "rxjs";
import { Observable } from 'rxjs';

@Injectable()
export class LogService {

    constructor(
        private _http: Http
    ) { }

    create(log: Prize) {
        return this._http.post('/logs', log)
            .map(data => data.json()).toPromise()
    }

    getLogs() {
        return this._http.get('/logs')
            .map(data => data.json()).toPromise()
    }

    getLog(log: Prize) {
        return this._http.get('/logs/' + log._id)
            .map(data => data.json()).toPromise()
    }

}
