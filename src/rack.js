var { Component, Rect } = scene

const NATURE = {
  props: [{
    type: 'number',
    label: 'shelves',
    name: 'shelves',
    property: 'shelves'
  }, {
    type: 'number',
    label: 'depth',
    name: 'depth',
    property: 'depth'
  }, {
    type: 'string',
    label: 'location',
    name: 'location',
    property: 'location'
  }]
}

export default class Rack extends Rect {

    _draw(context) {

    var {
      left,
      top,
      width,
      height,
      hidden = false,
    } = this.model;

    // 박스 그리기
    context.beginPath();

    context.rect(left, top, width, height);
    context.moveTo(left, top)
    context.lineTo(left + width, top + height)
    context.moveTo(left, top + height)
    context.lineTo(left + width, top)

    if(!hidden){
      this.drawFill(context)
      this.drawStroke(context)
    }
  }

  static get nature() {
    return NATURE
  }

  get controls() {}
}

Component.register('rack', Rack)
