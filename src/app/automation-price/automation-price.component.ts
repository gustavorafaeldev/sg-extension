import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-automation-price',
  templateUrl: './automation-price.component.html',
  styleUrls: ['./automation-price.component.css']
})
export class AutomationPriceComponent {

  spinner = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router) {
  }

  request() {
    this.spinner = true;
    const url = this.router.url
   this.httpClient.post("http://54.224.18.176:8080/automation", {url: url}).subscribe(
     res => {
       Swal.fire(
         'Bom trabalho!',
         'Atualize a pagina do seu produto no Sg Cloud',
         'success'
       )
     this.spinner = false;
   }, err => {
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Houve um erro ao atualizar os preços, tente novamente!'
       })
       this.spinner = false
     })
  }
}
