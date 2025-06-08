import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import { TagsComponent } from '../tags/tags.component'; 
import { NgxStarsModule } from 'ngx-stars';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxStarsModule, SearchComponent, TagsComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.params.subscribe(params => {
    const searchTerm = params['searchTerm'];
    const tagTerm = params['tag'];
    const foodService = this.foodService;
    if (searchTerm) {
      this.foods = foodService.getAllFoodsBySearchTerm(searchTerm);
    }else if(tagTerm){
      this.foods = this.foodService.getAllFoodsByTag(tagTerm);
    } 
    else {
      this.foods = foodService.getAll();
    }
    console.log('Foods after filter:', this.foods);
  });
}


}
