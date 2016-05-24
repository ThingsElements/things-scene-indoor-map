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

  static get nature() {
    return NATURE
  }

  get controls() {}
}

Component.register('rack', Rack)
