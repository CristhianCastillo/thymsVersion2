import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from "../home/home";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
              public loadingCtrl: LoadingController, private formBuilder: FormBuilder, public alertController: AlertController,
              private loginService: LoginProvider) {
    let backAction = platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
      backAction();
    }, 2)
    this.loginForm = this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  private createForm(){
    return this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  validarDatos(){
    const usuarioLogin = {
      usuario: this.loginForm.value['usuario'],
      password: this.loginForm.value['password']
    };
    this.autentificarUsuario(usuarioLogin);
  }

  autentificarUsuario(data){
    const loader = this.loadingCtrl.create({
      content: "Verificando!!"
    });
    loader.present();
    this.loginService.loginUser(data).subscribe(
      (result: boolean) =>{
        console.log(result);
        if(result){
          loader.dismiss();
          this.navCtrl.setRoot(HomePage);
        }
        else{
          loader.dismiss();
          this.mostrarMensajeDeError("Usuario y/o contraseña incorrectos.");
        }
      }
    );
  }

  /**
   *
   * @param mensaje
   */
  mostrarMensajeDeError(mensaje: string) {
    let alert = this.alertController.create({
      title: 'Error',
      message: mensaje,
      buttons: [{
        text: 'Aceptar'
      }]
    });
    alert.present()
  }

}
