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

    public getComputerById(id: number): Observable<Computer>{
        return this.http.get<Computer>(`${environment.api_URL}v1/computers/${id}`);
    }
    public postComputer(computer: Computer): Observable<any>{
        return this.http.post<any>(`${environment.api_URL}v1/computers`, computer);
    }
    public excluirComputer(id: number): Observable<any> {
        return this.http.delete(`${environment.api_URL}v1/computers/${id}`);
    }
    public updateComputer(computer: Computer): Observable<any> {
        return this.http.put<any>(`${environment.api_URL}v1/computers/${computer.id}`, computer);
    }
}