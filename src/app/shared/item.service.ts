import { Injectable } from '@angular/core';
import { Item } from './items';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [];

  constructor(private http: HttpClient) {
    this.fetchAllFromApi();
  }

  // service method for showing all todos
  fetchAllFromApi(): Observable<{todos: Item[]}> {
    const req = this.http.get<{todos: Item[]}>('http://todo.digitalcube.rs/api/todos');
    req.subscribe(items => {
      this.items = items.todos;
      console.log('this items', this.items);
    });
    return req;
  }

  // service method for adding new todos
  addNewTask(item: Item): Observable<{id: number}> {
    return this.http.put<{id: number}>('http://todo.digitalcube.rs/api/todos', item);
  }

  // service method for managing todos (done and undone)
  doneTask(item: Item): Observable<Object> {
    return this.http.patch('http://todo.digitalcube.rs/api/todos/' + item.id, {done: item.done});
  }

  // service method for deleting todos
  deleteTask(item: Item): Observable<Object> {
      return this.http.delete('http://todo.digitalcube.rs/api/todos/' + item.id);
  }

  // method returns all assignment
  getItems(): Item[] {
    return this.items;
  }

}
