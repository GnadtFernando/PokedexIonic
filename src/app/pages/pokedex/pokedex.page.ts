import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {
  pokemons: any = [];

  constructor(private pokeapiService: PokeapiService,
              private router: Router) {

    this.getPokedex();

   }

   getPokedex(){
     this.pokeapiService.getPokedex().then((data:any) =>{
      this.pokemons = data.pokemon_entries;
     }).catch((err)=>{

     })
   }

  ngOnInit() {
  }

  verMais(pokemon: any) {
   this.router.navigate([`pokemon/${pokemon.entry_number}`])

  }
  

}
