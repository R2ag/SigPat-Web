import { LocationsService } from './../services/locations.service';
import { Component, OnInit } from '@angular/core';
import { Ambiente } from '../model/ambiente';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: Observable<Ambiente[]>;
  displayedColumns = ['_id', 'name', 'cidade'];



  constructor(private locationsService: LocationsService){
    this.locations = this.locationsService.list();
  }

  ngOnInit(): void {

  }
}
