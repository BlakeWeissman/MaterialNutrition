import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  // TODO create proper global model/keys
  // public OTHER_MEAL_ITEMS_KEY;
  // public meals = [
  //     {
  //       {
  //         key: 'eggs',
  //         quantity: 20,
  //         type: 'food'
  //       },
  //       {
  //         key: 'pizza',
  //         quantity: 1,
  //         type: 'recipie'
  //       }
  //     },
  //     {
  //       {
  //         key: 'eggs',
  //         quantity: 20,
  //         type: 'food'
  //       },
  //       {
  //         key: 'pizza',
  //         quantity: 1,
  //         type: 'recipie'
  //       }
  //     },
  //   ]

  public meals = [
    {
      name: 'Other',
      mealItems: [
        {
          key: 'eggs',
          quantity: 20,
          type: 'food'
        },
        {
          key: 'pizza',
          quantity: 1,
          type: 'recipie'
        }
      ]
    },
    {
      name: 'Breakfast',
      mealItems: [
        {
          key: 'eggs',
          quantity: 20,
          type: 'food'
        },
        {
          key: 'pizza',
          quantity: 1,
          type: 'recipie'
        }
      ]
    },
    {
      name: 'Lunch',
      mealItems: [
        {
          key: 'eggs',
          quantity: 20,
          type: 'food'
        },
        {
          key: 'pizza',
          quantity: 1,
          type: 'recipie'
        }
      ]
    },
    {
      name: 'Dinner',
      mealItems: [
        {
          key: 'eggs',
          quantity: 20,
          type: 'food'
        },
        {
          key: 'pizza',
          quantity: 1,
          type: 'recipie'
        }
      ]
    },
  ]

  public test(v) {
    console.log(v);
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.meals, event.previousIndex, event.currentIndex);
    this.meals = [...this.meals];
  }

}
