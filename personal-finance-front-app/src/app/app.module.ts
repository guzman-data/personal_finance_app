import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovementComponent } from './movement/movement.component';


const routes: Routes = [
  {path: '', redirectTo: '/movements', pathMatch: 'full'},
  {path: 'movements', component: MovementComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
