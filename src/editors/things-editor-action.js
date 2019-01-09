/*
 * Copyright © HatioLab Inc. All rights reserved.
 */
import { html } from '@polymer/lit-element'
import { ThingsEditorProperty } from '@hatiolab/things-shell/things-module'
import '@polymer/paper-icon-button/paper-icon-button'

export default class ThingsEditorAction extends ThingsEditorProperty {
  static get is() {
    return 'things-editor-action'
  }

  editorTemplate(props) {
    var property = props.property || {}
    var { icon, action } = property
    return html`
      <style>
        :host > label {
          display: flex;
          grid-column: span 3;
          order: 1;
          align-items: center;
          justify-self: right;
        }
      </style>
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
