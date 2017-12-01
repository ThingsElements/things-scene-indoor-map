/*
 * Copyright © HatioLab Inc. All rights reserved.
 */
var { Component, Container, CardLayout, Model } = scene

import Floor from './floor'

const LABEL_WIDTH = 25
const LABEL_HEIGHT = 25

function rgba(r, g, b, a) {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'action',
    label: 'floor',
    name: 'floor',
    property: {
      icon: 'add-circle',
      action: function (indoorMap) {
        indoorMap.addFloor()
      }
    }
  }],
  'value-property': 'activeIndex'
}

export default class IndoorMap extends Container {

  get nature() {
    return NATURE
  }

  get layout() {
    return CardLayout
  }

  set activeIndex(index) {
    var config = Object.assign({}, this.layoutConfig)

    config.activeIndex = index

    this.set('layoutConfig', config)
  }

  get activeFloor() {
    return this.components[this.get('layoutConfig').activeIndex]
  }

  _post_draw(context) {

    super._post_draw(context)

    if (this.app.isViewMode)
      return

    var { left, top, width, fillStyle } = this.model

    // 이동 핸들 그리기
    context.beginPath();

    context.rect(left + width, top, LABEL_WIDTH, LABEL_HEIGHT)

    let color = 255 - 20 % 255
    context.fillStyle = rgba(color, color, color, 1)
    context.fill()

    context.closePath();

  }

  contains(x, y) {

    if (super.contains(x, y))
      return true

    if (this.app.isViewMode)
      return false

    var { left, top, width } = this.bounds;

    var right = left + width;

    var h = LABEL_HEIGHT

    return (x < Math.max(right + LABEL_WIDTH, right) && x > Math.min(right + LABEL_WIDTH, right)
      && y < Math.max(top + h, top) && y > Math.min(top + h, top));
  }

  addFloor() {
    let floor = Model.compile({
      type: 'floor',
      fillStyle: 'gray',
      top: 0,
      left: 0,
      width: 100,
      height: 100
    });

    this.addComponent(floor)
  }

  drawLocationMarkers(locations) {
    let floor = this.activeFloor
    floor.drawLocationMarkers(locations);
  }

}

Component.register('indoor-map', IndoorMap)
