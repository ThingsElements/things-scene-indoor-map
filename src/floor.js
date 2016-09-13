var { Component, Container, CardLayout, Model } = scene

export default class Floor extends Container {

  // _draw(context) {
  //   var { depth } = this.model
  // }

  drawText() {}

  /*
   * PATH 리스트를 직접 수정할 수 있는 지를 결정한다.
   *
   * 일반적으로 PATH는 바운드 생성을 위해서 논리적으로 생성되므로, 직접 수정하지 않는다.(return false)
   * 그러나, 각 꼭지점들이 개별로 움직이는 다각형류는 path 라는 모델데이타를 가지므로, 직접수정이 가능할 수 있다.(return true)
   *
   * Immutable 컴포넌트의 형상을 바꾸는 방법은 바운드를 이용한 리사이즈나, 특별한 컨트롤을 통해서 가능하다.
   */
  get mutable() {
    return false
  }

  /*
   * BOUND를 통해서 리사이즈를 할 수 있는 지를 결정한다.
   *
   * 일반적으로 면적을 갖는 컴포넌트는 대체로 가능하다.(return true)
   * 그러나, LINE 등 면적을 가지지않는 컴포넌트는 가능하지 않도록 정의한다.(return false)
   */
  get resizable() {
    return false
  }

  /*
   * 회전을 할 수 있는 지를 결정한다.
   *
   * 일반적으로 모든 컴포넌트는 가능하다.(return true)
   */
  get rotatable() {
    return false
  }

  drawLocationMarkers(locations) {

    for(let uuid in locations) {
      let locInfo = locations[uuid]
      let props = locInfo.props || {}

      let currentTime = (new Date()).getTime()
      // let diffTime = 500
      let diffTime = currentTime - locInfo.lastUpdateTime

      if( diffTime < locInfo.updateInterval ) {
        let movingObject = this.findById(uuid)
        if(movingObject) {
          // props.yaw = 0;
          // props.roll = 0;

          movingObject.set(props)
          for(let key in props){
            movingObject[key] = props[key]
          }
        } else {

          // TODO: marker의 초기값 관련 로직 정리 필요.

          let config = Object.assign({
            type: locInfo.type || "camera",
            id : uuid,
            fillStyle: 'red',
            left : props.center.x - props.width * 0.5 ,
            top: props.center.y - props.height * 0.5,
            cx: props.center.x,
            cy: props.center.y
          }, props)

          let marker = Model.compile(config);

          this.addComponent(marker);

          // movingObject = this.findById(uuid)
          // if(movingObject) {
          //   movingObject.set(props);
          // }
        }
      } else {
        let movingObject = this.findById(uuid)
        this.removeComponent(movingObject)
      }

      this.invalidate()

    }

  }
}

Component.register('floor', Floor)
