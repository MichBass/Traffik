import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  search_string: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  query($event) {    
    this.search.emit($event);
  }
}
