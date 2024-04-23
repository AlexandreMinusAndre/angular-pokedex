import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'
  descriptionUrl = 'https://pokeapi.co/api/v2/pokemon-species/'

  constructor(private http: HttpClient) { }

  getDetail(id: any): Observable<Object> {
    return this.http.get(this.pokemonUrl + id)
  }

  getDescription(id: any): Observable<any> {
    return this.http.get(this.descriptionUrl + id)
  }
}
