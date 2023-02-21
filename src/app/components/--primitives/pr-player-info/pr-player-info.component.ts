import { Component, Input, OnChanges, HostBinding } from '@angular/core';

@Component({
  selector: 'app-pr-player-info',
  templateUrl: './pr-player-info.component.html',
  styleUrls: ['./pr-player-info.component.scss']
})
export class PrPlayerInfoComponent implements OnChanges {
  @HostBinding('class.selected') selected: boolean = false;
  @Input() player: any;

  constructor() {

  }

  ngOnChanges() {
    this.selected = Object.keys(this.player).length > 0;
  }

}
