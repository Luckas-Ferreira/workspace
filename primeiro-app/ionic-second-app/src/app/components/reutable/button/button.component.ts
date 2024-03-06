import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [NgClass] 
})
export class ButtonComponent  implements OnInit {
  @Input() label: string | undefined;
  @Input() labelType: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';
  @Output() clickButtonEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {}

  clickButton(){
    this.clickButtonEvent.emit();
  }
  getBadgeClass(labelType: string): string {
    const colors = {
      primary: 'bg-blue-500 hover:bg-blue-700',
      secondary: 'bg-gray-500 hover:bg-gray-700',
      success: 'bg-green-500 hover:bg-green-700',
      warning: 'bg-yellow-500 hover:bg-yellow-700',
      danger: 'bg-red-500 hover:bg-red-700',
    };

    return `${colors[this.labelType]} text-white font-bold py-2 px-4 rounded`;
  }
}
