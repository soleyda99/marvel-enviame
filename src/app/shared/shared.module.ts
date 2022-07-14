import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { EditModule } from '../components/characters/pages/edit/edit.module';
import { CharactersRoutingModule } from '../components/characters/characters-routing.module';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    CardComponent,
    SpinnerComponent,
    NavbarComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EditModule,
    CharactersRoutingModule,
    RouterModule,
  ],
  exports: [CardComponent, SpinnerComponent, NavbarComponent],
})
export class SharedModule {}
