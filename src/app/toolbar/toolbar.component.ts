import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  title = 'ToDo-List';

  constructor(private itemsService: ItemService,
    private http: LoginService,
    private router: Router) { }

  ngOnInit() {}

  // method returns number of undone assignment
  sumTodo(): number {
    const done = this.itemsService.getItems().filter(items => items.done === false);
    return done.length;
  }

  // method returns number of done assignment
  sumDone(): number {
    return this.itemsService.getItems().filter(items => items.done === true).length;
  }

  // method logout current user
  logOut() {
    this.http.logOut().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}
