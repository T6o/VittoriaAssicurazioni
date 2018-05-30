import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  edited: boolean = false;
  pfpgButtons: boolean = false;
  pf: boolean = false;
  pg: boolean = false;
  buttonPgiuridica : boolean = true;
  buttonPfisica : boolean = true;
  loggedUser : boolean = true;
  save: boolean = true;
  editfromSave: boolean = true;

  pvendita = [
   {value: '0', viewValue: 'GAETA 330'},
   {value: '1', viewValue: 'Sub_ Cassino Centro'},
   {value: '2', viewValue: 'Sub_ Esperia'}
 ];

 canali = [
   {value: '0', viewValue: 'Bancone'},
   {value: '1', viewValue: 'Campagne di Vendita '},
   {value: '2', viewValue: 'Canali Alternativi'},
   {value: '3', viewValue: 'Cliente Potenziale'},
   {value: '4', viewValue: 'Convenzioni'}
 ];

 sesso = [
   {value: '0', viewValue: 'M'},
   {value: '1', viewValue: 'F'},
 ];

  constructor(){

  };

  personaF(){
    this.edited = true;
    this.editfromSave = false;
    //this.pf = true;

    var divToChange = <HTMLInputElement>document.getElementById('pfisicaID');
    divToChange.className = "animate moveRight circleBase";
    this.buttonPfisica = true;

    this.buttonPgiuridica = false;
    //this.pfpgButtons = true;
  }

  personaG(){

    this.edited = true;
    this.editfromSave = false;
    //this.pg = true;

    var divToChange = <HTMLInputElement>document.getElementById('pgiuridicaID');
    divToChange.className = "fright animate moveLeft circleBase";

    this.buttonPfisica = false;
    this.buttonPgiuridica = true;
    //this.pfpgButtons = true;
  }

  login(){
  //  this.pfpgButtons = false;
  }

  logout(){
    this.edited = false;
    //this.firstPg = true;
    //this.pfpgButtons = true;*/

    if(this.buttonPgiuridica){
      this.buttonPfisica = true;
      var divToChange = <HTMLInputElement>document.getElementById('pgiuridicaID');
      divToChange.className = "fright  moveLeft circleBase";
    }else{
      this.buttonPgiuridica = true ;
      var divToChange1 = <HTMLInputElement>document.getElementById('pfisicaID');
      divToChange1.className = "fleft  moveRight circleBase";
    }

  }

  saveButton(){

    if(this.editfromSave){
      this.editfromSave = false;
    }else{
      this.editfromSave = true;
    }

    if(this.save){
      this.save = false;
    }
    else{
      this.save = true;
      this.logout();
    }


    console.log("save");
  }



}
