import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-wrapper',
  template: `
    <p>
      wrapper works!
    </p>
  `,
  styles: [
  ]
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
