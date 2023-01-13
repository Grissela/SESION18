import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  input!:any[];
 
  constructor(private router:Router, private route:ActivatedRoute, public Services: ListaService) { }

  ngOnInit(): void {
    this.Services.getAll().subscribe( Services => this.input = Services);
  }

  editar(id:string){
    
    this.router.navigate(['/detalle', id])
  }

}
