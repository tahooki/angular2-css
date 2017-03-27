import { Component, OnInit, ElementRef } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-dragula',
  templateUrl: './dragula-route.component.html',
  styleUrls: ['./dragula-route.component.scss', './css/dragula.min.css']
})
export class DragulaRouteComponent implements OnInit {

  test: string = 'abcd';

  options: any = {
    direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
    copy: true,                       // elements are moved by default, not copied
    copySortSource: false,             // elements in copy-source containers can be reordered
    revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
    removeOnSpill: false,              // spilling will `.remove` the element, if this is true
    mirrorContainer: document.body,    // set the element that gets mirror elements appended
    ignoreInputTextSelection: true     // allows users to select input text, see details below
  }

  options2: any = {
    direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
    copy: false,                       // elements are moved by default, not copied
    copySortSource: false,             // elements in copy-source containers can be reordered
    revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
    removeOnSpill: false,              // spilling will `.remove` the element, if this is true
    mirrorContainer: document.body,    // set the element that gets mirror elements appended
    ignoreInputTextSelection: true     // allows users to select input text, see details below
  }

  isBasket: boolean = false;

  constructor(private _dragulaService: DragulaService) {
  }

  ngOnInit() {
    this._dragulaService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`);
      if(value[0] === 'second-bag') {
        this.isBasket = true;
      }
      this.onDrag(value.slice(1));
    });
    this._dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
      this.isBasket = false;

    });
    // this._dragulaService.over.subscribe((value) => {
    //   console.log(`over: ${value[0]}`);
    //   this.onOver(value.slice(1));
    // });
    // this._dragulaService.out.subscribe((value) => {
    //   console.log(`out: ${value[0]}`);
    //   this.onOut(value.slice(1));
    // });
  }

  private onDrag(args) {
    let [e, el] = args;
    // do something
    console.log('onDrag args >>> ',args,e.className, el.className);
  }

  private onDrop(args) {
    let [e, el] = args;
    // do something
    if(this.isBasket) {
      var nodes = document.getElementsByClassName("container2");
      nodes[0].appendChild(e);
    }
    console.log('onDrop args >>> ',args,e, el);
  }

  private onOver(args) {
    let [e, el, container] = args;
    // do something
    console.log('onOver args >>> ',args,e, el.innerHTML, container);
  }

  private onOut(args) {
    let [e, el, container] = args;
    // do something
    console.log('onOut args >>> ',args,e, el, container);
  }

}
