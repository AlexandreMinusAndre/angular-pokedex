import { Component } from '@angular/core';
import { DetailService } from '../detail.service';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  constructor (private detailService: DetailService, private route: ActivatedRoute) {}

  pokemon: any= {};
  pokemonId: string = ""
  description: any= []

  getPokemon(): void {
    const pokemonId = this.route.snapshot.paramMap.get('id')
    this.detailService.getDetail(pokemonId).subscribe(resp => {
      this.pokemon = resp
    })
  }

  getDescription(): void {
    const pokemonId = this.route.snapshot.paramMap.get('id')
    this.detailService.getDescription(pokemonId).subscribe(resp => {
      resp?.flavor_text_entries.forEach((e: any) => {
        if(e.language.name === "en") {
          this.description.push(e)
        }
      })
    })
  }

  ngOnInit(): void {
    this.getPokemon()
    this.getDescription()
  }
}
