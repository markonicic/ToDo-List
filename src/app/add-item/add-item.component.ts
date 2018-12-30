import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/items';
import { ItemService } from '../shared/item.service';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  items: Item[] = [];
  addAssignment: FormGroup;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.addAssignment = new FormGroup({
      addItem: new FormControl(null, Validators.required)
    });
  }

  // add new assignment
  add() {
    const item = new Item(
      this.addAssignment.get('addItem').value
    );
    this.itemService.addNewTask(item).subscribe(() => {
      this.itemService.fetchAllFromApi();
      this.addAssignment.reset();
    });
  }
}
