import { Component, OnInit,Injectable } from '@angular/core';
import { Computer } from '../shared/computer.interface';
import {ComputerService} from '../shared/computer.service'

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class ComputersComponent implements OnInit {
  public computers: Array<Computer> = [];
  constructor(public computerService: ComputerService) {
    
   }

  ngOnInit(){
    this.getList();
  }
  getList(){
    try{
      this.computerService.getComputers().subscribe(data => {
      this.computers = data;
      });
    }catch(err){
      console.log(err);
    }
    
  }
  excluir(id: number) {
    
    this.computerService.excluirComputer(id).subscribe(
      (retorno) => {
            this.getList();
            console.log(retorno.mensagem);
          },
          error => {
            console.log(error.error.mensagem);
          }
    );
  }

}
