import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  privateUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  constructor(private http: HttpClient) { }

  getPokemon(limit: string, offset: string): Observable<any> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset)
  }
}
