var { Layout } = scene

var TableLayout = {
  reflow: function(container) {
    let layoutConfig = container.get('layoutConfig')
    let columns = (layoutConfig && layoutConfig.columns) || 3

    let rows = Math.ceil(container.components.length / columns);

    let componentWidth = container.bounds.width / columns;
    let componentHeight = container.bounds.height / rows;

    var colNum = 0;
    var rowNum = 0;

    container.components.forEach((component, idx) =>{
      colNum = idx % columns
      rowNum = Math.floor(idx / columns)
      component.bounds = {
        left : colNum * componentWidth,
        top : rowNum * componentHeight,
        width : componentWidth,
        height : componentHeight,
      }

      component.set('rotation', 0)

    })

  },

  capturables: function(container) {
    return container.components
  },

  drawables: function(container) {
    return container.components
  },

  isStuck: function(component) {
    return true
  }
}

Layout.register('table', TableLayout)

export default TableLayout
