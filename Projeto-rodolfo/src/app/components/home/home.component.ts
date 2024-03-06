import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges{

  constructor(private service: TestService){


  }
  ngOnChanges(changes: SimpleChanges): void {
   
  }
  ngOnInit(): void {
    this.service.fun().pipe().subscribe((resposne) => {
      if(resposne.ok){
        this.dadosform = resposne;
      }
    })
  }
  test: string = 'Olá mundo'
  dadosform = ''
  isTrue: boolean = false;


}
