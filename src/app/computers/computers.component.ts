import { Component, OnInit,Injectable, Input, Output, EventEmitter } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';
import { Computer } from '../shared/computer.interface';
import {ComputerService} from '../shared/computer.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
  term = '';
  queryField = new FormControl();
  
  
  @Output() output = new EventEmitter<any>();
  constructor(public computerService: ComputerService) {
    
   }

  ngOnInit(){
    this.getList();
  }
  getList(){
    try{
      this.computerService.getComputers().subscribe(data => {
      this.computers = data;
      console.log(this.computers);
      });
    }catch(err){
      console.log(err);
    }
    
  }
  search(){
    console.log(this.queryField.value);
    
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
