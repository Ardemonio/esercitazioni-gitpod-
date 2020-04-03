import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server-mappe';


  latitud:number= 9.1;
  longitud:number= 45.5;


  lat: number = 45.506738;
  lng: number = 9.190766;



  lati:number = 45.5319039;
  longi:number = 9.1687484;


  color="green";
  triangle: Array<Point> = 
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ];
    icon ={
        url:'',
    scaledSize: {
      width: 60,
      height: 60

    }
    
};


  constructor(){}
  blu() : boolean{
    this.color ="blue";
    return false;
  }
  rosso() : boolean{
      this.color ="red";
      return false;
  }
  giallo(): boolean {
      this.color ="yellow";
      return false;
  }


}