import { Component, OnInit } from '@angular/core';
import { ServicesSharedService } from 'src/app/shared/services/services-shared.service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  offset: number = 0;

  constructor(
    private _serviceCharacters: ServicesService,
    private _serviceSharing: ServicesSharedService
  ) {}

  ngOnInit(): void {
    this.getCharacters(this.offset);
  }

  getCharacters(offset: number) {
    this._serviceCharacters.getCharacters(offset).subscribe((res) => {
      this._serviceSharing.sharingObservableData = res;
    });
  }

  onScroll() {
    this.offset = this.offset + 20;
    this.getCharacters(this.offset);
  }
}
