var { Component, Container, CardLayout, Model } = scene

import Floor from './floor'

const LABEL_WIDTH = 50
const LABEL_HEIGHT = 50

function rgba(r, g, b, a) {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export default class IndoorMap extends Container {

  get layout() {
    return CardLayout
  }

  set activeIndex(index) {
    var config = Object.assign({}, this.layoutConfig)

    config.activeIndex = index
    this.set('layoutConfig', config)
  }

  _draw(context) {

    super._draw(context)

    var { left, top, fillStyle } = this.model

    for(let i = 0;i <= this.components.length;i++) {
      context.beginPath();

      context.rect(left - LABEL_WIDTH, top + i * LABEL_HEIGHT,
        LABEL_WIDTH, LABEL_HEIGHT)

      let color = 255 - (20 * (i + 1)) % 255
      context.fillStyle = rgba(color, color, color, 1)
      context.fill()

      context.closePath();
    }

  }

  contains(x, y) {

    if(super.contains(x, y))
      return true

    var { left, top } = this.bounds;

    left = left - LABEL_WIDTH
    var h = LABEL_HEIGHT * (this.components.length + 1)

    return (x < Math.max(left + LABEL_WIDTH, left) && x > Math.min(left + LABEL_WIDTH, left)
      && y < Math.max(top + h, top) && y > Math.min(top + h, top));
  }

  onmouseup(e) {
    var down_point = this.__down_point
    delete this.__down_point

    if(!down_point
      || down_point.x != e.offsetX
      || down_point.y != e.offsetY) {
      return
    }

    var point = this.transcoordC2S(e.offsetX, e.offsetY);

    var { left, top } = this.model

    var x = point.x - left
    var y = point.y - top

    if(x > 0)
      return

    y /= LABEL_HEIGHT
    y = Math.floor(y)

    if(!this.layoutConfig)
      this.layoutConfig = {}

    if(y > this.components.length)
      return

    /* 생성 버튼이 클릭되면, 새로운 floor를 추가한다. */
    if(y == this.components.length) {
      this.add(Model.compile({
        type: 'floor',
        width: 100,
        height: 100
      }))
    }

    var config = Object.assign({}, this.layoutConfig)

    config.activeIndex = y
    this.set('layoutConfig', config)
  }

  onmousedown(e) {
    this.__down_point = {
      x: e.offsetX,
      y: e.offsetY
    }
  }

}

Component.register('indoor-map', IndoorMap)
