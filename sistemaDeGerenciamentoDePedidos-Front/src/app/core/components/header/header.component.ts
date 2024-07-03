import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input('sidenav') sidenav!: MatSidenav;

  constructor() {}

  ngOnInit(): void {}

  public sideBar() {
    this.sidenav.toggle();
  }
}
