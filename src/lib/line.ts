import {createSvgElement} from './helpers';

export class Line {
  private _thickness: number;
  get thickness(): number {
    return this._thickness;
  }

  set thickness(value: number) {
    this._thickness = value;
    this._host.setAttribute('stroke-width', String(value));
  }

  private _dash: string;
  get dash(): string {
    return this._dash;
  }

  set dash(value: string) {
    this._dash = value;
    this._host.setAttribute('stroke-dasharray', String(value));
  }

  private _y: number;

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
    this._host.setAttribute('y1', String(value));
    this._host.setAttribute('y2', String(value));
  }

  private _color: string;
  set color(value: string) {
    this._color = value;
    this._host.setAttribute('stroke', value);
  }

  get color(): string {
    return this._color;
  }

  private _host: SVGLineElement;
  get host(): SVGLineElement {
    return this._host;
  }

  constructor() {
    this._host = createSvgElement('line');
    this._host.setAttribute('x1', '0');
    this._host.setAttribute('x2', '100%');
  }
}
