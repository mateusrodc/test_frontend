import { Component, OnInit,Injectable } from '@angular/core';
import {ComputerService} from '../shared/computer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-computer-update',
  templateUrl: './computer-update.component.html',
  styleUrls: ['./computer-update.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class ComputerUpdateComponent implements OnInit {

  constructor(public computerService: ComputerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(){
    this.route.params.subscribe((parametro)=>{
      this.computerService.getComputerById(parametro.id).subscribe((data)=>{
        this.formulario.get('id')?.setValue(data.id);
        this.formulario.get('marca')?.setValue(data.marca);
        this.formulario.get('modelo')?.setValue(data.modelo);
        this.formulario.get('placaMae')?.setValue(data.placaMae);
        this.formulario.get('memoriaRam')?.setValue(data.memoriaRam);
        this.formulario.get('hd')?.setValue(data.hd);
        this.formulario.get('velocidadeProcessador')?.setValue(data.velocidadeProcessador);
        this.formulario.get('foto')?.setValue(data.foto);
      }, error=> {
        console.log(error);
        this.router.navigate(['/']);
      })
    })
  }
  formulario: FormGroup = new FormGroup({
    id: new FormControl( null, [ Validators.required]),
    marca: new FormControl( null, [ Validators.required]),
    modelo: new FormControl(null, [ Validators.required]),
    placaMae: new FormControl(null, [Validators.required]),
    memoriaRam: new FormControl(null, [Validators.required]),
    hd: new FormControl(null, [Validators.required]),
    velocidadeProcessador: new FormControl(null, [Validators.required]),
    foto: new FormControl(null, [Validators.required]),

  });
  alterar() {
    this.computerService.updateComputer(this.formulario.value).subscribe(
      (retorno) => {
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
