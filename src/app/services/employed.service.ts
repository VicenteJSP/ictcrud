import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employed } from '../models/employed.model';

@Injectable({
  providedIn: 'root'
})
export class EmployedService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.api.host}/${environment.api.endpoint}/employed`;
  }

  getAll() {
    return this.http.get(this.url);
  }

  register(employed: Employed) {
    return this.http.post(`${this.url}`,employed);
  }

  getById(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(id: string, employedUpdate: Employed) {
    return this.http.put(`${this.url}/${id}`, employedUpdate);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
