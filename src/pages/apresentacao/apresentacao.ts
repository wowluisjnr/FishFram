import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { BemVindoPage } from '../bem-vindo/bem-vindo';


export interface Slide{
  title:string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-apresentacao',
  templateUrl: 'apresentacao.html',
})
export class ApresentacaoPage {

  showSkip: boolean=true;

  slidePages: Slide[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.slidePages =[
      {
        title: "Bem vindo ao controle da pisicultura",
        description: "Aqui voce ira ter o controle de sua pisicultura na mão.",
        image: "assets/imgs/fish.svg"
      },
      {
        title: "Povoamento",
        description: "Registre o povoamento em cada tanque.",
        image: "assets/imgs/fishes.svg"
      },
      {
        title: "Controle de perdas",
        description: "Tenha o controle da mortandade de peixes.",
        image: "assets/imgs/fishbones.svg"
      }
    ];  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApresentacaoPage');
  }

  onSlideChangeStart(slider){    
    this.showSkip = !slider.isEnd();
  }
  startApp(){
    this.navCtrl.setRoot(BemVindoPage);
  }

}
