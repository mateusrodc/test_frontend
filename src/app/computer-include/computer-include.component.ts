import { Component, OnInit,Injectable } from '@angular/core';
import {ComputerService} from '../shared/computer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-computer-include',
  templateUrl: './computer-include.component.html',
  styleUrls: ['./computer-include.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class ComputerIncludeComponent implements OnInit {
  
  constructor(public computerService: ComputerService,private router: Router) { }

  ngOnInit(){

  }
  
  formulario: FormGroup = new FormGroup({
    marca: new FormControl( null, [ Validators.required]),
    modelo: new FormControl(null, [ Validators.required]),
    placaMae: new FormControl(null, [Validators.required]),
    memoriaRam: new FormControl(null, [Validators.required]),
    hd: new FormControl(null, [Validators.required]),
    velocidadeProcessador: new FormControl(null, [Validators.required]),
    foto: new FormControl(null, [Validators.required]),

  });
  salvar() {
    console.log(this.formulario.value)
    this.computerService.postComputer(this.formulario.value).subscribe((retorno)=>{
      this.router.navigate(['/']);
    },error => {
      console.log(error.message);
    })
  }

}
