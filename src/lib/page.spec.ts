import {Page} from './page';

describe('page', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
  });


  it('should have a container', () => {
    const page = new Page(container);
    expect(page.container).toBe(container);
  });

  it('should have a host element', () => {
    const page = new Page(container);
    expect(page.host).toBeDefined();
    expect(page.host.tagName).toBe('svg');
  });

  it('Should container is parent of host', () => {
    const page = new Page(container);
    expect(page.host.parentNode).toBe(container);
  });


  it('should have a inner host element', () => {
    const page = new Page(container);
    expect(page.innerHost).toBeDefined();
    expect(page.innerHost.tagName).toBe('svg');
  });

  it('Should host is parent of inner host', () => {
    const page = new Page(container);
    expect(page.innerHost.parentNode).toBe(page.host);
  });

  it('should host a the default width and height', () => {
    const page = new Page(container);
    expect(page.host.getAttribute('height')).toBe(String(page.height));
    expect(page.host.getAttribute('width')).toBe(String(page.width));
  });

  it('should innerHost x is left margin', () => {
    const page = new Page(container);
    page.leftMargin = 10;

    expect(page.leftMargin).toBe(10);
    expect(page.innerHost.getAttribute('x')).toBe('10');
  });

  it('should innerHost y is top margin', () => {
    const page = new Page(container);
    page.topMargin = 10;

    expect(page.topMargin).toBe(10);
    expect(page.innerHost.getAttribute('y')).toBe('10');
  });

  it('should innerHost width is width - (leftMargin + rightMargin)', () => {
    const page = new Page(container);
    page.width = 200;
    page.leftMargin = 10;
    page.rightMargin = 10;


    expect(page.rightMargin).toBe(10);
    expect(page.innerHost.getAttribute('width')).toBe('180');
  });

  it('should innerHost height is width - (topMargin + bottomMargin)', () => {
    const page = new Page(container);
    page.height = 200;
    page.topMargin = 10;
    page.bottomMargin = 10;

    expect(page.bottomMargin).toBe(10);
    expect(page.innerHost.getAttribute('height')).toBe('180');
  });

  it('should innerHost width is width - (leftMargin + rightMargin) when set width', () => {
    const page = new Page(container);
    page.width = 200;
    page.leftMargin = 10;
    page.rightMargin = 10;

    page.width = 300;

    expect(page.width).toBe(300);
    expect(page.host.getAttribute('width')).toBe('300');
    expect(page.innerHost.getAttribute('width')).toBe('280');
  });

  it('should innerHost height is width - (topMargin + bottomMargin) when set height', () => {
    const page = new Page(container);
    page.height = 200;
    page.topMargin = 10;
    page.bottomMargin = 10;

    page.height = 300;

    expect(page.height).toBe(300);
    expect(page.host.getAttribute('height')).toBe('300');
    expect(page.innerHost.getAttribute('height')).toBe('280');
  });


  it('should add block in blocks array when add block', () => {
    const page = new Page(container);
    const block = page.addBlock();

    expect(page.blocks.indexOf(block) >= 0).toBeTrue();
  });

  it('should block have array length - 1 has index when add block', () => {
    const page = new Page(container);
    page.addBlock();
    const block = page.addBlock();

    expect(page.blocks.indexOf(block) > 0).toBeTrue();
    expect(block.index).toBe(1);
  });

  it('should innerHost is parent of block host', () => {
    const page = new Page(container);
    const block = page.addBlock();

    expect(block.host.parentNode).toBe(page.innerHost);
  });

  it('should remove block from array when block is removed', () => {
    const page = new Page(container);
    const block = page.addBlock();
    page.removeBlock(block);

    expect(page.blocks.indexOf(block) < 0).toBeTrue();
  });

  it('should remove block from innerHost when block is removed', () => {
    const page = new Page(container);
    const block = page.addBlock();
    page.removeBlock(block);

    expect(page.innerHost.contains(block.host)).toBeFalse();
  });

  it('should update block indexes when one block is removed', () => {
    const page = new Page(container);
    page.addBlock();
    const blockToRemove = page.addBlock();
    page.addBlock();
    page.addBlock();

    page.removeBlock(blockToRemove);

    page.blocks.forEach((block, index) => expect(block.index).toBe(index));
  });
});
