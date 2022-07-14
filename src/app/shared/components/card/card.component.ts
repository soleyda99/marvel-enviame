import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/components/characters/models/character';
import { CreateComponent } from 'src/app/components/characters/pages/create/create.component';
import { EditComponent } from 'src/app/components/characters/pages/edit/edit.component';
import { ServicesSharedService } from '../../services/services-shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @ViewChild(EditComponent, { static: true })
  editComponent!: EditComponent;

  @ViewChild(CreateComponent, { static: true })
  CreateComponent!: CreateComponent;

  public data$: Observable<Result[]>;

  constructor(private _servicesService: ServicesSharedService) {
    this.data$ = _servicesService.sharingObservable;
    console.log(this.data$, '');
  }

  edit(data: Result) {
    this.editComponent.open(data);
  }

  editSave(e: any) {
    this.data$.forEach((response) => {
      response.forEach((res) => {
        if (res.id === e.id) {
          res.name = e.name;
          res.description = e.description;
          res.modified = e.modified;
          res.thumbnail.extension = e.extension;
          res.thumbnail.path = e.path;
        }
      });
    });
  }
}
