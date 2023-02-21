import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LittleCoreService } from 'src/app/services/little-core/little-core.service';
import { Player, Stats } from 'src/app/services/little-core/types';
import * as moment from 'moment';

@Component({
  selector: 'app-pr-sheet',
  templateUrl: './pr-sheet.component.html',
  styleUrls: ['./pr-sheet.component.scss'],
})
export class PrSheetComponent implements OnChanges {

  @Input() players: Player[] = [];
  @Input() popup: boolean = false;

  playersStats: Stats[] = [];
  sortedPlayers:any;


  currentPlayerId: number = 0;

  constructor(private littleCoreService: LittleCoreService) {}

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.players?.currentValue?.length) {
      this.playersStats = await this.littleCoreService.getStats(
        this.players.map((player: Player) => player.id)
      );
      this.generatePlayerInfo([...this.playersStats]);
      this.sortPlayer([...this.playersStats]);
    }
    if(this.players.length === 0) this.playersStats = [];
    if(this.popup) this.currentPlayerId = 0;
  }

  getInfo(info:any){
    this.currentPlayerId = info;
  }

  generatePlayerInfo(players:any){
    const result:any = [];

    const groups = players.reduce((groups:any, item:any) => {
      const group = (groups[item.player] || []);
      group.push(item);
      groups[item.player] = group;
      return groups;
    }, {});

    Object.values(groups).forEach((player:any, index) => {
      const averagePts = player.reduce((total:any, next:any) => total + next?.pts, 0) / player.length;
      const averageFg = player.reduce((total:any, next:any) => total + next?.fg, 0) / player.length;
      const averageMin = player.reduce((total:any, next:any) => total.add(moment.duration(next?.min)), moment.duration());

      result.push({
        fg: averageFg.toFixed(2) || null,
        gp: player[index]?.gp || null,
        id: player[index]?.id || null,
        min: [Math.floor(averageMin.asHours()), averageMin.minutes()].join(':') || null,
        player: player[index]?.player || null,
        pts: averagePts.toFixed(2) || null,
        team: player[index]?.team || null
      })

    });

    this.playersStats = result;

  }

  sortPlayer(players:any){
    this.playersStats = players.sort((a:any, b:any)=> (new Date(b?.min).getTime() - new Date(a?.min).getTime() || b?.pts - a?.pts || b?.fg - a?.fg ));
  }
 
}
