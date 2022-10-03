import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../data/dataapi.service';


@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  public  hotelList: any;
  constructor(private dataService: DataapiService) { }

  ngOnInit(): void {

    this.getHotelList();
  }

  public getHotelList(){

    this.dataService.fetchData().subscribe(res=>{

     this.hotelList=res; 
    });
  }
  // public names = [{ name: 'hotel 1', body: 'hotel 1 body ' }, { name: 'hotel 2', body: 'hotel 2 body' },
  // { name: 'hotel 2', body: 'hotel 2 body' }, { name: 'hotel 3', body: 'hotel 3 body' }];

}
