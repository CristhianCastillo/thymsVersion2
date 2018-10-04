import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from 'ionic-angular';


export interface Config {
  technologies: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public config : Config;
  public rows : any;
  public productos: any = [
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false
    }
  ];
  selected: any[] = [];
  constructor(public navCtrl: NavController, private  alertController: AlertController) {
  }

  ionViewDidLoad() {

  }

  onSelect(event) {
    console.log('Event: select', event, this.selected);
  }

  onActivate(event) {
    console.log('Event: activate', event);
  }

  filaSeleccionada(row) {
    let alert =  this.alertController.create({
      title: 'Seleccionado',
      message: `${row.idFactura} - ${row.referencia} - ${row.descripcion}`,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  agregarProducto(producto){
    console.log('Este es el producto seleccionado: ');
    console.log(producto);
  }

  eliminarProducto(producto){
    console.log('Este es el producto seleccionado para eliminar:');
    console.log(producto);
  }


}
