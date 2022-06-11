import { Menu } from './../../../interfaces/menu';
import { MenuService } from './../../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  menu: Menu[] = [];
  constructor(private _menuService: MenuService) {}

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu() {
    this._menuService.getMenu().subscribe((data) => {
      console.log(data);
    });
  }
}
