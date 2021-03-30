import {Line} from './line';

describe('Line spec', () => {
  it('should have a host', () => {
    const line = new Line();
    expect(line.host).toBeDefined();
    expect(line.host.tagName).toBe('line');
  });

  it('should have x1=0 & x2=100%', () => {
    const line = new Line();

    expect(line.host.getAttribute('x1')).toBe('0');
    expect(line.host.getAttribute('x2')).toBe('100%');
  });

  it('Should correctly change stroke when set color', () => {
    const line = new Line();
    const color = '#EEE';

    line.color = color;

    expect(line.color).toBe(color);
    expect(line.host.getAttribute('stroke')).toBe(color);
  });

  it('Should correctly change stroke width when set thickness', () => {
    const line = new Line();
    line.thickness = 2;

    expect(line.thickness).toBe(2);
    expect(line.host.getAttribute('stroke-width')).toBe('2');
  });

  it('Should correctly change dash array when set dash', () => {
    const line = new Line();
    const dash = '1, 1';

    line.dash = dash;

    expect(line.dash).toBe(dash);
    expect(line.host.getAttribute('dash-array')).toBe(dash);
  });

  it('Should correctly change y1 & y2 when set y', () => {
    const line = new Line();
    line.y = 12;

    expect(line.y).toBe(12);
    expect(line.host.getAttribute('y1')).toBe('12');
    expect(line.host.getAttribute('y2')).toBe('12');
  });
});
