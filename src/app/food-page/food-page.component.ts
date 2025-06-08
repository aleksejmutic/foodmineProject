import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {Food} from '../shared/models/Food'
import { FoodService } from '../services/food/food.service';
import { NgxStarsModule } from 'ngx-stars';
import { TagsComponent } from "../tags/tags.component";

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxStarsModule, TagsComponent],
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})

export class FoodPageComponent implements OnInit {

  food!: Food | undefined;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private foodService: FoodService
  ) {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.food = this.foodService.getFoodById(id);
      }
    });
  }

  ngOnInit(): void {}
}


