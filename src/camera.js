var { Component, Rect } = scene

const NATURE = {
  props: []
};

const points = [
  {x: 0, y: 0, z: 0},
  {x: 1, y: 0.8, z: 0.5},
  {x: 1, y: 0.8, z: -0.5},
  {x: 1, y: -0.8, z: -0.5},
  {x: 1, y: -0.8, z: 0.5},
  {x: 1, y: 0, z: 0}
];

function rotate(points, pitch, roll, yaw) {
  var cosa = Math.cos(yaw);
  var sina = Math.sin(yaw);

  var cosb = Math.cos(pitch);
  var sinb = Math.sin(pitch);

  var cosc = Math.cos(roll);
  var sinc = Math.sin(roll);

  var Axx = cosa*cosb;
  var Axy = cosa*sinb*sinc - sina*cosc;
  var Axz = cosa*sinb*cosc + sina*sinc;

  var Ayx = sina*cosb;
  var Ayy = sina*sinb*sinc + cosa*cosc;
  var Ayz = sina*sinb*cosc - cosa*sinc;

  var Azx = -sinb;
  var Azy = cosb*sinc;
  var Azz = cosb*cosc;

  var transformed = [];

  for (var i = 0; i < points.length; i++) {
    var px = points[i].x;
    var py = points[i].y;
    var pz = points[i].z;

    var obj = {};

    obj.x = Axx*px + Axy*py + Axz*pz;
    obj.y = Ayx*px + Ayy*py + Ayz*pz;
    obj.z = Azx*px + Azy*py + Azz*pz;

    obj.x *= 100;
    obj.y *= 100;
    obj.z *= 100;

    transformed.push(obj);
  }

  return transformed;
}

export default class Camera extends Rect {

  _draw(context) {

    var transformed = this.transformed;

    if(this.transformed[5].y > 0) {
      this.__drawLines(context,transformed)
      this.__drawRect(context,transformed)
    } else {
      this.__drawRect(context,transformed)
      this.__drawLines(context,transformed)
    }

  }

  get transformed() {
    var {
      yaw = 0,
      pitch = 0,
      roll = 0
    } = this.model;

    return rotate(points, yaw, roll, pitch);
  }

  static get nature() {
    return NATURE
  }

  __drawLines(context, transformed) {
    var center = this.center;

    context.beginPath();

    context.moveTo(center.x + transformed[0].x, center.y + transformed[0].z);
    context.lineTo(center.x + transformed[1].x, center.y + transformed[1].z);
    context.moveTo(center.x + transformed[0].x, center.y + transformed[0].z);
    context.lineTo(center.x + transformed[2].x, center.y + transformed[2].z);
    context.moveTo(center.x + transformed[0].x, center.y + transformed[0].z);
    context.lineTo(center.x + transformed[3].x, center.y + transformed[3].z);
    context.moveTo(center.x + transformed[0].x, center.y + transformed[0].z);
    context.lineTo(center.x + transformed[4].x, center.y + transformed[4].z);

    context.strokeStyle = this.model.strokeStyle;
    context.stroke();
    context.closePath();
  }

  __drawRect(context, transformed) {
    var center = this.center;

    context.beginPath();

    context.moveTo(center.x + transformed[1].x, center.y + transformed[1].z);
    context.lineTo(center.x + transformed[2].x, center.y + transformed[2].z);
    context.lineTo(center.x + transformed[3].x, center.y + transformed[3].z);
    context.lineTo(center.x + transformed[4].x, center.y + transformed[4].z);
    context.lineTo(center.x + transformed[1].x, center.y + transformed[1].z);

    context.fillStyle = this.model.fillStyle;
    context.strokeStyle = this.model.strokeStyle;
    context.fill();
    context.stroke();
    context.closePath();
  }
}

Component.register('camera', Camera)
