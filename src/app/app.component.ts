import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NavigationStart, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  spinner = false;
  mostrarBotao = true;

  ngOnInit(): void {
  }

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Esconder o botão ao navegar para uma rota específica
        if (event.url.startsWith('/automation')) {
          this.mostrarBotao = false;
        } else {
          this.mostrarBotao = true;
        }
      }
    });
  }



  getUrl() {
    this.spinner = true;

    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      if (tabs && tabs.length > 0) {
        const activeTab = tabs[0];
        const tabUrl = activeTab.url;

        const obj = {
          url: tabUrl,
        };

        const redirectUrl = `http://localhost:4200/automation?data=${tabUrl}`;
        // const redirectUrl = `http://54.224.18.176:8080/automation?data=${tabUrl}`;

        window.open(redirectUrl, "_blank")
      }
    });
  }

  protected readonly window = window;
}

