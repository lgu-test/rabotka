import {Component, ElementRef, OnInit} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})

export class IndexComponent implements OnInit{

  public left: Array<string> = Array<string>('');
  public right: Array<string> = Array<string>('');

  public words: Array<string> = [
    'Агрессивный',
    'Хороший',
    'Нормальный'
  ];

  ngOnInit(): void {
    const box = this.dragndrop.nativeElement.querySelector('.example-box');
    const style = window.getComputedStyle(box);
    console.log(style);
  }

  constructor(private dragndrop: ElementRef) {
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log(this.left, this.words, this.right);
    }
  }


}
