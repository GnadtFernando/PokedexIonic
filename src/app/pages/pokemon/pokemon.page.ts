import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  pokemonId: string;
  pokemon: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private pokeapiService: PokeapiService,
              private router: Router) { }

  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('id');

    this.pokeapiService.getPokemon(this.pokemonId).then((pokemon: any)=>{

      this.pokemon = pokemon;
    });
  }

  pokedexPage(){
    this.router.navigate([`pokedex`])
  }

}
