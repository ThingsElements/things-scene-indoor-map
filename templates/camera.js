export default {
  name: 'camera',
    /* 다국어 키 표현을 어떻게.. */
  description: '...',
  /* 다국어 키 표현을 어떻게.. */
  group: 'IoT',
  /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon: '../',
  /* 또는, Object */
  template: {
    type: 'camera',
    model: {
      type: 'camera',
      left: 100,
      top: 100,
      width: 600,
      height: 400,
      lineWidth: 1,
      strokeStyle: 'black',
      fillStyle: 'yellow',
      yaw: 0.2,
      pitch: 0.2,
      roll: 0.2
    }
  }
}
