/*
 * Copyright © HatioLab Inc. All rights reserved.
 */
import { html, css } from 'lit-element'
import { ThingsEditorProperty } from '@things-factory/board-ui/client/modeller-module'

export default class ThingsEditorAction extends ThingsEditorProperty {
  static get is() {
    return 'things-editor-action'
  }

  static get styles() {
    return [
      ...ThingsEditorProperty.styles,
      css`
        :host > label {
          display: flex;
          grid-column: span 3;
          order: 1;
          align-items: center;
          justify-self: right;
        }
      `
    ]
  }

  editorTemplate(props) {
    var property = props.property || {}
    var { icon, action } = property
    return html`
      <paper-icon-button
        .icon=${icon}
        @click=${
          e =>
            this.dispatchEvent(
              new CustomEvent('action-editor-clicked', {
                bubbles: true,
                composed: true,
                detail: action
              })
            )
        }
      ></paper-icon-button>
    `
  }
}

customElements.define(ThingsEditorAction.is, ThingsEditorAction)
