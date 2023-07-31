import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent  implements OnInit {
  name: string;
  constructor() { }

  ngOnInit() {}

  test(){
    this.name = 'asdas';
  }
}
