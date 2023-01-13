import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id="";
  input!:any[];
  constructor(private router:Router, private route:ActivatedRoute,public Services: ListaService) { }

  ngOnInit(): void {
    this.Services.getAll().subscribe( Services => this.input = Services);
    this.id = String(this.route.snapshot.paramMap.get('id'))
  }

}
