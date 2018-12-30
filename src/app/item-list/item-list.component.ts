import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/items';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  constructor(public itemService: ItemService) {}

  ngOnInit() {
  }

  // method gets all todos
  getItems() {
    return this.itemService.items;
  }

  // method checks if checkbox is clicked and change value "checked" to true or false
  checked(item) {
    this.itemService.doneTask(item).subscribe();
    console.log('item.done', item.done);
  }

  // method for deleting todos
  deleted(item) {
    this.itemService.deleteTask(item).subscribe(() => {
      this.itemService.fetchAllFromApi();
    });
  }
}
