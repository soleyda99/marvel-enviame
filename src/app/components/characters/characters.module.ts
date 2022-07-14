import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EditModule } from './pages/edit/edit.module';
import { CreateModule } from './pages/create/create.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    EditModule,
    CreateModule,
  ],
  exports: [CharactersRoutingModule],
})
export class CharactersModule {}
