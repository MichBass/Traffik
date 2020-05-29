import { Component, OnInit } from '@angular/core';
//const configuration = require("config.json");
import {Api_maps_key} from 'config.json';

@Component({
  selector: 'app-semaphore-map',
  templateUrl: './semaphore-map.component.html',
  styleUrls: ['./semaphore-map.component.scss']
})
export class SemaphoreMapComponent implements OnInit {
  image_url;
  constructor() { }

  ngOnInit(): void {
    let latitude = 45.95160;
    let longitude = 12.68054;
    this.image_url = "https://www.mapquestapi.com/staticmap/v4/getmap?key="+ Api_maps_key +"&size=600,300&type=map&imagetype=jpg&zoom=10&scalebar=false&traffic=false&center="+latitude.toString()+","+longitude.toString()+"&xis=https://s.aolcdn.com/os/mapquest/yogi/icons/poi-active.png,1,c,40.015831,-105.27927&ellipse=fill:0x70ff0000|color:0xff0000|width:2|40.00,-105.25,40.04,-105.30";
  }

}
