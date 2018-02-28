export default {
  name: 'indoor map',
    /* 다국어 키 표현을 어떻게.. */
  description: '...',
  /* 다국어 키 표현을 어떻게.. */
  group: 'container',
  /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon: '../',
  /* 또는, Object */
  template: {
    type: 'indoor map',
    model: {
      type: 'indoor-map',
      left: 100,
      top: 100,
      width: 200,
      height: 200,
      fontSize: 80,
      fontColor: '#585858',
      lineWidth: 1,
      activeIndex: 0,
      alpha: 1,
      components: [{
        type: 'floor',
        left: 0,
        top: 0,
        width: 600,
        height: 400,
        fontSize: 80,
        fontColor: '#585858',
        fillStyle: 'white',
        lineWidth: 0,
        alpha: 1
      }]
    }
  }
}
