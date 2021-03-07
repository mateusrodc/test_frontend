import { Component, OnInit,Injectable } from '@angular/core';
import { Computer } from '../shared/computer.interface';
import {ComputerService} from '../shared/computer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})
@Injectable({
  providedIn: 'root',
})

export class ComputerDetailComponent implements OnInit {
  
  public computer: Computer = {id:0,marca:"",modelo:"",placaMae:"",
  memoriaRam:"",velocidadeProcessador:"",hd:"",foto:""}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public computerService: ComputerService,
    

  ) {
    
  }

  ngOnInit(){
    this.getElement();
    
  }
  getElement(){
    this.route.params.subscribe((parametro)=>{
      this.computerService.getComputerById(parametro.id).subscribe(data => {
        this.computer =data
      });
    })
  }

}
