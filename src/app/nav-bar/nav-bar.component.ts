import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  title= 'BUSI';
  eslogan = "VIAJES QUE CONECTAN";

    cambiarHeader(){
    window.addEventListener('scroll', function(){
      var header = document.querySelector("header");
      header?.classList.toggle("text-yellow-500", window.scrollY==0);
      header?.classList.toggle("bg-yellow-500", window.scrollY>0);
      header?.classList.toggle("text-white", window.scrollY>0);
    })
  }
  
  ngOnInit(){
    this.cambiarHeader();
  }
}
