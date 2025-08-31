import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  routes = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Perfil',
      path: '/perfil'
    },
    {
      name:'Estructuras',
      path: '/estructuras'
    },
    {
      name:'Documentación',
      path: '/documentacion'
    },
    {
      name:'Usuarios',
      path: '/usuarios'
    },
  ];

  constructor() { }

  ngOnInit(){
  }

}
