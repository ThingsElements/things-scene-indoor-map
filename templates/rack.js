export default {
  name: 'rack',
    /* 다국어 키 표현을 어떻게.. */
  description: '...',
  /* 다국어 키 표현을 어떻게.. */
  group: 'warehouse',
  /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon: '../',
  /* 또는, Object */
  template: {
    type: 'rack',
    model: {
      type: 'rack',
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      depth: 100,
      shelves: 1,
      locPattern: '{z}{s}-{u}-{sh}',
      shelfPattern: '#',
      fillStyle: '#ffffff',
      strokeStyle: '#999',
      lineWidth: 1,
      alpha: 1
    }
  }
}
