import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [EditComponent],
})
export class EditModule {}
