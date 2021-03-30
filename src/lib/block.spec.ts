import {Block} from './block';

describe('Describe block', () => {
  it('Should have host element', () => {
    const block = new Block();

    expect(block.host).toBeDefined();
    expect(block.host.tagName).toBe('svg');
  });

  it('Should have x=0', () => {
    const block = new Block();

    expect(block.host.getAttribute('x')).toBe('0');
  });

  it('Should have width=100%', () => {
    const block = new Block();

    expect(block.host.getAttribute('width')).toBe('100%');
  });

  it('Should have 100 has default height', () => {
    const block = new Block();

    expect(block.height).toBe(100);
    expect(block.host.getAttribute('height')).toBe('100');
  });

  it('Should have correct height when set height', () => {
    const block = new Block();

    block.height = 122;
    expect(block.height).toBe(122);
    expect(block.host.getAttribute('height')).toBe('122');
  });

  it('Should have correct width when set width', () => {
    const block = new Block();

    block.width = 122;
    expect(block.width).toBe(122);
    expect(block.host.getAttribute('width')).toBe('122');
  });

  it('Should had a line in lines array when add line',() => {
    const block = new Block();
    const line = block.addLine();

    expect(block.lines[0]).toBe(line);
  });

  it('Should host element contains line host', () => {
    const block = new Block();
    const line = block.addLine();

    expect(line.host.parentNode).toBe(block.host);
  });

  it('Should remove in lines array when a line is removed', () => {
    const block = new Block();
    const line = block.addLine();
    block.removeLine(line);

    expect(block.lines.indexOf(line) < 0).toBeTrue();
  });


  it('Should remove line host from block host when a line is removed', () => {
    const block = new Block();
    const line = block.addLine();
    block.removeLine(line);

    expect(block.host.contains(line.host)).toBeFalse();
  });
});
