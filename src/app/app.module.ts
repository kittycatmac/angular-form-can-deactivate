import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import {routes} from './app.routing';
import { UserListComponent } from './user-list/user-list.component'
import {CanDeactivateGuard} from './can-deactivate/can-deactivate.guard';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes), ReactiveFormsModule ],
  providers:[CanDeactivateGuard],
  declarations: [ AppComponent, UserFormComponent, UserListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
