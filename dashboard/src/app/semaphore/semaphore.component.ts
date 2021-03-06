import { Component, OnInit, Input } from '@angular/core';
import { CrossRoad } from '../models/semaphore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semaphore',
  templateUrl: './semaphore.component.html',
  styleUrls: ['./semaphore.component.scss']
})
export class SemaphoreComponent implements OnInit {

  @Input() crossroad: CrossRoad = new CrossRoad();

  constructor(private router: Router) { }
  
  ngOnInit(){}

  details() {    
    //this.router.navigateByUrl('details');
    this.router.navigate(['/details', this.crossroad.id, this.crossroad.humidity, this.crossroad.temperature, this.crossroad.pressure, this.crossroad.coordinates.latitude, this.crossroad.coordinates.longitude]);
  }
}


