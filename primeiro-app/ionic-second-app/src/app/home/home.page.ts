import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonFooter } from '@ionic/angular/standalone';
import { ButtonComponent } from '../components/reutable/button/button.component';
import { NewComponent } from '../components/reutable/new/new.component';
import { FormsModule } from '@angular/forms';
import { fabric } from 'fabric';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FormsModule, NewComponent,IonFooter, IonCol, IonRow, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, ButtonComponent],
})
export class HomePage implements AfterViewInit{
  email = 'opa'
  @ViewChild('canvas', { static: false }) canvasElement!: ElementRef;
  private canvas!: fabric.Canvas|any;
  private isDrawing = false;
  private isImageMoving = true;

  ngAfterViewInit() {
    this.canvas = new fabric.Canvas(this.canvasElement.nativeElement);
    
    fabric.Image.fromURL('/assets/icons/icon-512x512.png', (img) => {
      // ajusta a imagem para caber no canvas
      img.scaleToWidth(this.canvas.width);
      img.scaleToHeight(this.canvas.height);
      
      // adiciona a imagem ao canvas
      this.canvas.add(img);

     
      // adiciona manipuladores de eventos de toque para zoom e pan
    let lastPosX, lastPosY;
    let zoom = 1;
    this.canvas.on('touchstart', (opt: any) => {
      let e = opt.e;
      lastPosX = e.touches[0].clientX;
      lastPosY = e.touches[0].clientY;
      if (e.touches.length > 1) {
        let x = e.touches[0].clientX - e.touches[1].clientX;
        let y = e.touches[0].clientY - e.touches[1].clientY;
        zoom = Math.sqrt(x * x + y * y);
      }
    });

    this.canvas.on('touchmove', (opt: any) => {
      let e = opt.e;
      let x = e.touches[0].clientX - lastPosX!;
      let y = e.touches[0].clientY - lastPosY!;
      if (e.touches.length > 1) {
        let xDist = e.touches[0].clientX - e.touches[1].clientX;
        let yDist = e.touches[0].clientY - e.touches[1].clientY;
        let newZoom = Math.sqrt(xDist * xDist + yDist * yDist);
        let delta = newZoom - zoom;
        this.canvas.zoomToPoint({ x: e.touches[0].clientX, y: e.touches[0].clientY }, this.canvas.getZoom() + delta / 200);
        zoom = newZoom;
      } else {
        this.canvas.relativePan({ x: x, y: y });
      }
      lastPosX = e.touches[0].clientX;
      lastPosY = e.touches[0].clientY;
      e.preventDefault();
      e.stopPropagation();
    });
  });


  }

  enableDrawing() {
    this.isDrawing = true;
    this.canvas.isDrawingMode = true;
    this.isImageMoving = false;
    this.canvas.selection = false;
  }

  enableImageMovement() {
    this.isImageMoving = true;
    this.canvas.selection = true;
    this.isDrawing = false;
    this.canvas.isDrawingMode = false;
  }

  test(){
    console.log('chegou aqui');
    
  }

  lorem(){
    console.log('clicou');
    
  }
}
