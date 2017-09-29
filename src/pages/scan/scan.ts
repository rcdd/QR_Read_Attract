import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  private eventId: number;
  public eventTitle: string;

  constructor(
    private _nav: NavController,
    private _navParams: NavParams,
    private _barcodeScanner: BarcodeScanner,
    private iab: InAppBrowser,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.eventId = 2;
    this.eventTitle = "cenas";
    this.buttonText = "Scan";
    this.loading = false;
  }

  public scanQR() {
    let options = {
      prompt: "Aponte para o código QR",
      showTorchButton: true,
      resultDisplayDuration: 0
    }
    this.buttonText = "Loading..";
    this.loading = true;

    this._barcodeScanner.scan(options).then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        this.buttonText = "Scan";
        this.loading = false;
        return false;
      }
      console.log("Scanned successfully!");
      console.log(barcodeData);
      this.buttonText = "Scan";
      this.loading = false;
      if ((/^http/.test(barcodeData.text))) {
        this.goToResult(barcodeData.text);
      } else {
        this.showMessage("ERRO: Nenhum link encontrado!");
      }
    }, (err) => {
      console.log(err);
    });
  }

  private goToResult(barcodeData) {
    const browser = this.iab.create(barcodeData, "_self", "zoom=no,");
    browser.show();
  }

  private showMessage(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      showCloseButton: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
