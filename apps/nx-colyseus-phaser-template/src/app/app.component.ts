import { Component } from '@angular/core';

@Component({
  selector: 'nx-colyseus-phaser-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nx-colyseus-phaser-template';

  test() {
    const test = 1;
    let test2 =3;
    test2=2;
    if(test === test2){return;}
  }
}
