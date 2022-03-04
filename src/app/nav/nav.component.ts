import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  lang: string = "en";
  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem("lang") || "en";
  }

  changeLang(event: any){
    localStorage.setItem("lang", event.target.value);
    window.location.reload();
  }

}
