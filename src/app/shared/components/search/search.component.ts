import { Component, OnInit } from '@angular/core';
import { ServicesSharedService } from '../../services/services-shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search: string = '';
  constructor(private _serviceShared: ServicesSharedService) {}

  ngOnInit(): void {}
  buscar() {
    this._serviceShared.search(this.search).subscribe((res) => {
      this._serviceShared.sharingObservableData = res;
    });

    this.search = '';
  }
}
