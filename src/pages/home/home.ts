import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicProvider} from "../../providers/music/music";
import { Music} from "../../music";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allMusic: Music[];
  constructor(private provider: MusicProvider,public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    this.provider.getMusic()
      .subscribe(musicList => {
        this.allMusic = musicList,
          console.log(musicList)
      })
  }

}
