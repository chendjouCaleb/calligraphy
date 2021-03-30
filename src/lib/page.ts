import {Block} from './block';
import {createSvgElement} from './helpers';

export class Page {
  constructor(private _container: HTMLElement) {
    this._host = createSvgElement('svg');
    this._innerHost = createSvgElement('svg');

    this._host.appendChild(this._innerHost);
    this._container.appendChild(this.host);

    this.width = this._width;
    this.height = this._height;

    this.topMargin = this._topMargin;
    this.rightMargin = this._rightMargin;
    this.bottomMargin = this._bottomMargin;
    this.leftMargin = this._leftMargin;
  }

  private _width: number = 2480;
  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
    this._host.setAttribute('width', String(value));
    this._innerHost.setAttribute('width', String(this.innerHostWidth));
  }

  private _height: number = 3508;
  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
    this._host.setAttribute('height', String(value));
    this._innerHost.setAttribute('height', String(this.innerHostHeight));
  }

  private _leftMargin: number = 75.59;
  get leftMargin(): number {
    return this._leftMargin;
  }

  set leftMargin(value: number) {
    this._leftMargin = value;
    this._innerHost.setAttribute('x', String(value));
  }

  private _topMargin: number = 75.59;
  get topMargin(): number {
    return this._topMargin;
  }

  set topMargin(value: number) {
    this._topMargin = value;
    this._innerHost.setAttribute('y', String(value));
  }

  private _rightMargin: number = 75.59;
  get rightMargin(): number {
    return this._rightMargin;
  }

  set rightMargin(value: number) {
    this._rightMargin = value;
    this._innerHost.setAttribute('width', String(this.innerHostWidth));
  }

  private _bottomMargin: number = 75.59;
  get bottomMargin(): number {
    return this._bottomMargin;
  }

  set bottomMargin(value: number) {
    this._bottomMargin = value;
    this._innerHost.setAttribute('height', String(this.innerHostHeight));
  }

  private _margin: number = 75.59;
  get margin(): number {
    return this._margin;
  }

  set margin(value: number) {
    this._margin = value;
    this.topMargin = value;
    this.rightMargin = value;
    this.bottomMargin = value;
    this.leftMargin = value;
  }

  private _host: SVGElement;
  get host(): SVGElement {
    return this._host;
  }

  private _innerHost: SVGElement;
  get innerHost(): SVGElement {
    return this._innerHost;
  }

  get container(): HTMLElement {
    return this._container;
  }

  private _blocks: Block[] = [];
  get blocks(): Block[] {
    return this._blocks.slice();
  }

  addBlock(): Block {
    const block = new Block();
    block.index = this._blocks.length;
    this._blocks.push(block);

    this._innerHost.appendChild(block.host);
    return block;
  }


  removeBlock(block: Block) {
    this._blocks = this._blocks.filter(b => b !== block);
    this._blocks.forEach((b, i) => b.index = i);
    this._innerHost.removeChild(block.host);
  }

  get innerHostWidth(): number {
    return this._width - this._leftMargin - this._rightMargin;
  }

  get innerHostHeight(): number {
    return this._height - this._topMargin - this._bottomMargin;
  }
}
