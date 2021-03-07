import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Computer} from '../shared/computer.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ComputerService{

    constructor(private http: HttpClient) { }
    public getComputers(): Observable<Array<Computer>> {
        return this.http.get<Array<Computer>>(`${environment.api_URL}v1/computers`);
    }
}