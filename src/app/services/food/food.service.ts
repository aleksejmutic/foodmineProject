import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food';
import {Tag} from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number) :Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'? 
    this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllFoodsBySearchTerm(searchTerm:String): Food[]{
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }


  getAllTags():Tag[]{
    return[
      { name: 'All', count:6},
      { name: 'FastFood', count:4},
      { name: 'Pizza', count:2},
      { name: 'Lunch', count:3},
      { name: 'SlowFood', count:2},
      { name: 'Hamburger', count:1},
      { name: 'Fry', count:1},
      { name: 'Soup', count:1},
    ];
  }

  getAll():Food[]{
    return[
      {
      id: 1, 
      name: 'Pizza peperoni', 
      price: 10,
      favourite: true,
      stars: 5.0,
      imageUrl: 'assets/images/foods/food-1.jpg',
      tags: ['FastFood', 'Pizza'],
      origins: ['Italy'],
      cookTime: '5-10'
      },
      {
      id: 2, 
      name: 'Meatballs', 
      price: 8,
      favourite: false,
      stars: 4.1,
      imageUrl: 'assets/images/foods/food-2.jpg',
      tags: ['Lunch', 'SlowFood'],
      origins: ['Chicago'],
      cookTime: '10-20'
      },
      {
      id: 3, 
      name: 'Hamburger', 
      price: 5,
      favourite: true,
      stars: 4.8,
      imageUrl: 'assets/images/foods/food-3.jpg',
      tags: ['FastFood', 'Hamburger'],
      origins: ['Los Angeles', 'New York'],
      cookTime: '10-15'
      },
      {
      id: 4, 
      name: 'French fries', 
      price: 3,
      favourite: true,
      stars: 4.2,
      imageUrl: 'assets/images/foods/food-4.jpg',
      tags: ['FastFood', 'Fry'],
      origins: ['Paris'],
      cookTime: '5'
      },
      {
      id: 5, 
      name: 'Vegetable soup', 
      price: 10,
      favourite: false,
      stars: 3.4,
      imageUrl: 'assets/images/foods/food-5.jpg',
      tags: ['Soup', 'Vegetable', 'Lunch', 'SlowFood'],
      origins: ['Global'],
      cookTime: '10-20'
      },
      {
      id: 6, 
      name: 'Vegetable pizza', 
      price: 10,
      favourite: true,
      stars: 4.0,
      imageUrl: 'assets/images/foods/food-6.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      origins: ['Italy'],
      cookTime: '10-20'
      },

    ]
  }
}
