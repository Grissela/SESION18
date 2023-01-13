import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private urlAPI = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http:HttpClient) { }

  getAll():Observable<string[]>{
    return this.http.get<string[]>(this.urlAPI);
  }
}
