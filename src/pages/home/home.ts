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

  private rackSeleccionado: string;
  private facturaSeleccionada: string;
  public config : Config;
  public rows : any;
  public racks: any = [
    { id: 'Rack 1'},
    { id: 'Rack 2'},
    { id: 'Rack 3'},
    { id: 'Rack 4'},
    { id: 'Rack 5'},
    { id: 'Rack 6'}
  ];
  public facturas: any = [
    {
      id: 'FA_0235435',
      nombre: 'Factura 1'
    },
    {
      id: 'FA_0235436',
      nombre: 'Factura 2'
    },
    {
      id: 'FA_0235437',
      nombre: 'Factura 3'
    },
    {
      id: 'FA_0235438',
      nombre: 'Factura 4'
    },
    {
      id: 'FA_0235439',
      nombre: 'Factura 5'
    },
    {
      id: 'FA_0235440',
      nombre: 'Factura 6'
    },
    {
      id: 'FA_0235441',
      nombre: 'Factura 7'
    },
    {
      id: 'FA_0235442',
      nombre: 'Factura 8'
    },
    {
      id: 'FA_0235443',
      nombre: 'Factura 9'
    },
    {
      id: 'FA_0235444',
      nombre: 'Factura 10'
    },
    {
      id: 'FA_0235445',
      nombre: 'Factura 11'
    },
    {
      id: 'FA_0235446',
      nombre: 'Factura 12'
    },
    {
      id: 'FA_0235447',
      nombre: 'Factura 13'
    },
    {
      id: 'FA_0235448',
      nombre: 'Factura 14'
    },
    {
      id: 'FA_0235449',
      nombre: 'Factura 15'
    }
  ];
  public productos: any = [
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false,
      estado: ''
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false,
      estado: ''
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false,
      estado: ''
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false,
      estado: ''
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false,
      estado: ''
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false,
      estado: ''
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false,
      estado: ''
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false,
      estado: ''
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false,
      estado: ''
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false,
      estado: ''
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false,
      estado: ''
    },
    {
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false,
      estado: ''
    }
  ];
  public selected: any[] = [];
  constructor(public navCtrl: NavController, private  alertController: AlertController) {
    this.rackSeleccionado = 'No seleccionado';
    this.facturaSeleccionada = 'No seleccionada';
  }

  ionViewDidLoad() {
  }

  onSelect(event) {
    console.log('Event: select', event, this.selected);
  }

  onActivate(event) {
    console.log('Event: activate', event);
  }

  obtenerFilaSeleccionada(row): string {
    let alert =  this.alertController.create({
      title: 'Seleccionado',
      message: `${row.idFactura} - ${row.referencia} - ${row.descripcion}`,
      buttons: ['Aceptar']
    });
    alert.present();
    return 'row-color';
  }

  agregarProducto(producto, index: number){
    if(producto.enlistado){
      producto.enlistado = false;
    } else {
      producto.enlistado = true;
    }
    this.productos[index] = producto;
    console.log(this.productos);
  }

  /**
   *
   * @param producto
   * @param index
   */
  eliminarProducto(producto, index: number){
    if(producto.enlistado){
      producto.enlistado = false;
    } else {
      producto.enlistado = true;
    }
    this.productos[index] = producto;
    console.log(this.productos);
  }

  /**
   *
   * @param rack
   */
  cambiarRackSeleccionado(rack: string){
    this.rackSeleccionado = rack;
    console.log("Rack Seleccionado: ", rack);
  }

  /**
   *
   * @param factura
   */
  cambiarFacturaSeleccionada(factura: string){
    this.facturaSeleccionada = factura;
    console.log("Fatura Seleccionada: ", factura);
  }
}
