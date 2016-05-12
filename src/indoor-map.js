var { Component, Container, CardLayout } = scene

const CONTROL_WIDTH = 50
const CONTROL_HEIGHT = 50

function rgba(r, g, b, a) {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export default class IndoorMap extends Container {

  get layout() {
    return CardLayout
  }

  _draw(context) {

    var { left, top, fillStyle } = this.model

    for(let i = 0;i < this.components.length;i++) {
      context.beginPath();

      context.rect(left - CONTROL_WIDTH, top + i * CONTROL_HEIGHT,
        CONTROL_WIDTH, CONTROL_HEIGHT)

      let color = 255 - (20 * (i + 1)) % 255
      context.fillStyle = rgba(color, color, color, 1)
      context.fill()

      context.closePath();
    }

    super._draw(context)
  }

  contains(x, y) {

    if(super.contains(x, y))
      return true

    var { left, top } = this.bounds;

    left = left - CONTROL_WIDTH
    var h = CONTROL_HEIGHT * this.components.length

    return (x < Math.max(left + CONTROL_WIDTH, left) && x > Math.min(left + CONTROL_WIDTH, left)
      && y < Math.max(top + h, top) && y > Math.min(top + h, top));
  }

  onclick(e) {

    var point = this.transcoordC2S(e.offsetX, e.offsetY);

    var { left, top } = this.model

    var x = point.x - left
    var y = point.y - top

    if(x > 0)
      return

    y /= CONTROL_HEIGHT
    y = Math.floor(y)

    if(!this.layoutConfig)
      this.layoutConfig = {}

    var config = Object.assign({}, this.layoutConfig)

    config.activeIndex = y
    this.set('layoutConfig', config)
  }

}

Component.register('indoor-map', IndoorMap)
