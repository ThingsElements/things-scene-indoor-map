var { Component, Container, CardLayout } = scene

export default class Floor extends Container {
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
}

Component.register('floor', Floor)
