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
      strokeStyle,
      lineWidth,
      fillStyle,
      alpha = 1,
    } = this.model;

    context.beginPath()
    context.rect(left, top, width, height)
    context.strokeStyle = strokeStyle
    context.lineWidth = lineWidth
    context.globalAlpha = alpha * 0.4
    context.stroke()

    context.beginPath()
    context.rect(left + width * 0.15, top + height * 0.15, width * 0.7, height * 0.7)
    context.fillStyle = fillStyle
    context.globalAlpha = alpha * 0.5
    context.fill()

    context.beginPath()
    context.moveTo(left, top)
    context.lineTo(left + width, top + height)
    context.moveTo(left, top + height)
    context.lineTo(left + width, top)
    context.strokeStyle = strokeStyle
    context.lineWidth = lineWidth
    context.globalAlpha = alpha * 0.4
    context.stroke()
  }

  static get nature() {
    return NATURE
  }

  get controls() {}
}

Component.register('rack', Rack)
