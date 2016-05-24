var { Component, Rect } = scene

export default class Rack extends Rect {

  _draw(context) {

    var { 
      left,
      top,
      sheaf,
      width,
      height,
      depth,
      hidden = false,
    } = this.model

    context.beginPath()

    context.rect(left, top, width, height)

    context.closePath()

    if(!hidden){
      this.drawFill(context)
      this.drawStroke(context)
    }
  }

  get controls() {}
}

Component.register('rack', Rack)
