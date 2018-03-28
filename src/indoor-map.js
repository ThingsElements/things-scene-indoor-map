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

  postrender(context) {

    super.postrender(context)

    if (this.app.isViewMode)
      return

    if (!this._focused)
      return

    var { left, top, width, fillStyle } = this.model

    // floor 선택 탭 그리기
    for(let i = 0;i < this.components.length;i++) {
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
    var contains = super.contains(x, y);

    if (this.app.isViewMode)
      return contains

    var { left, top, width, height } = this.bounds;
    var right = left + width;
    var h = LABEL_HEIGHT

    contains = contains ||
      // card selector 영역에 포함되는지
      (x < Math.max(left - LABEL_WIDTH, left) && x > Math.min(left - LABEL_WIDTH, left)
        && y < Math.max(top + h * this.size(), top) && y > Math.min(top + h * this.size(), top))

    if (contains)
      this._focused = true;
    else
      this._focused = false;

    this.invalidate();

    return contains
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

    if(y >= this.components.length)
      return

    // /* 생성 버튼이 클릭되면, 새로운 floor를 추가한다. */
    // if(y == this.components.length) {
    //   this.add(Model.compile({
    //     type: 'floor',
    //     width: 100,
    //     height: 100
    //   }))
    // }

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
