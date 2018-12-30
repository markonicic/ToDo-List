import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemListComponent } from './item-list/item-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AddItemComponent } from './add-item/add-item.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TokenInterceptor } from './shared/token.interceptor';
import { LoginService } from './shared/login.service';
import { CanActivateTodos } from './shared/can-activate-todos.service';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'todos', component: TodosComponent, canActivate: [CanActivateTodos] },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ItemListComponent,
    AddItemComponent,
    LoginComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatChipsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CanActivateTodos,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true, deps: [LoginService]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
