import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Page} from '../lib';

const letters = 'abcdefghijklmnopqrstuvwxyz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'calligraphy';
  page: Page;

  @ViewChild('container')
  container: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {

    const page = new Page(this.container.nativeElement);

    for(let i = 0; i < 26; i++) {
      const block = page.addBlock();
      block.y = i * 40;

      for (let j = 0; j < 30; j++) {
        const text = block.addText();
        text.y = 30;
        text.x = j * 30;
        text.text = letters[i];
      }

      const line = block.addLine();
      line.y = 18;
      line.thickness = 1;
      line.dash = '2 2';
      line.color = '#69797e';

      const line2 = block.addLine();
      line2.y = 70;
      line2.thickness = 1;
      line2.color = '#393939';
    }

    this.page = page;
  }

  print() {
    const width = 794;
    const height = 1123;


  }
}
