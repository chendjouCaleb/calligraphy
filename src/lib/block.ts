import {Line} from './line';
import {Text} from './text';
import {createSvgElement} from './helpers';

export class Block {
  public index: number = 0;

  constructor() {
    this._host = createSvgElement('svg');
    this.height = 100;
    this.width = '100%';

    this._host.setAttribute('x', '0');
  }

  private _y: number;
  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
    this._host.setAttribute('y', String(value));
  }

  private _height: number;
  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
    this._host.setAttribute('height', String(value));
  }

  private _width: string | number;
  get width(): string | number {
    return this._width;
  }

  set width(value: string | number) {
    this._width = value;
    this._host.setAttribute('width', String(value));
  }

  private _host: SVGElement;
  get host(): SVGElement{
    return this._host;
  }

  private _lines: Line[] = [];
  get lines(): Line[] {
    return this._lines.slice();
  }

  addLine(): Line {
    const line = new Line();
    this._host.appendChild(line.host);
    this._lines.push(line);
    return line;
  }

  removeLine(line: Line) {
    this._lines = this._lines.filter(l => l !== line);
    this._host.removeChild(line.host);
  }


  private _texts: Text[] = [];
  get texts(): Text[] {
    return this._texts.slice();
  }

  addText(): Text {
    const text = new Text();
    this._host.appendChild(text.host);
    this._texts.push(text);
    return text;
  }

  removeText(text: Text) {
    this._texts = this._texts.filter(l => l !== text);
    this._host.removeChild(text.host);
  }

}
