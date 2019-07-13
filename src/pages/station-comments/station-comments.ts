import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the StationCommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-station-comments',
  templateUrl: 'station-comments.html',
})
export class StationCommentsPage {

  public comments = [
    {
      username: 'murcielago123',
      date: 'Sep/04/2019 14:00',
      status: 'Malo',
      comment: 'hay demasiada gente para mi gusto :v',
      evidences: [
        'assets/imgs/comment1.jpg'
      ]
    },
    {
      username: 'marcianito2020',
      date: 'Sep/04/2019 14:05',
      status: 'Regular',
      comment: 'A mi parecer está normal',
    },
    {
      username: 'rasho_macuin2020',
      date: 'Sep/04/2019 14:05',
      status: 'Bueno',
      comment: 'Muy despejado para como es en semana',
      evidences: [
        'assets/imgs/comment1.jpg',
        'assets/imgs/comment3.jpg',
        'assets/imgs/comment2.jpeg'
      ]
    }
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StationCommentsPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
