import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  standalone: true,
  imports:[NgClass]
})
export class NewComponent  implements OnInit {
  @Output() clickEvent = new EventEmitter<void>();
  @Input() lorem!: string;
  opa!: any
  constructor() { }

  class(){
    return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
  }
  newClick(){
    this.clickEvent.emit();
  }
  ngOnInit() {
    console.log(this.lorem);
    
  }

}
