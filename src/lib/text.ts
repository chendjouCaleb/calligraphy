import {createSvgElement} from './helpers';

export class Text {
  constructor() {
    this._host = createSvgElement('text');

    this.fontSize = this._fontSize;
    this.fontFamily = this._fontFamily;
    this.color = this._color;
  }
  private _host: SVGTextElement;
  get host(): SVGTextElement{
    return this._host;
  }

  private _text: string;
  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
    this._host.innerHTML = value;
  }

  private _color: string = '#e1dfdd';
  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
    this._host.setAttribute('fill', value);
  }

  private _x: number;
  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
    this._host.setAttribute('x', String(value));
  }

  private _y: number;
  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
    this._host.setAttribute('y', String(value));
  }

  private _fontFamily: string = 'Ecolier';
  get fontFamily(): string {
    return this._fontFamily;
  }

  set fontFamily(value: string) {
    this._fontFamily = value;
    this._host.setAttribute('font-family', String(value));
  }

  private _fontSize: number = 12;
  get fontSize(): number {
    return this._fontSize;
  }

  set fontSize(value: number) {
    this._fontSize = value;
    this._host.setAttribute('font-size', String(value));
  }
}
