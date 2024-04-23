import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor (private pokemonService: PokemonService) {}

  pokemons: any = {}

  getPokemon(limit: string, offset: string): void {
    this.pokemonService.getPokemon(limit, offset).subscribe(resp => this.pokemons = resp)
  }

  onClick(limit: string, offset: string) {
    this.getPokemon(limit, offset)
  }

  ngOnInit(): void {
    this.getPokemon('151', '0')
  }
}
