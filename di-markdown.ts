import createDOMPurify from "dompurify";
import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
} from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { Remarkable } from "remarkable";

@customElement("di-markdown")
export class DiMarkdown extends LitElement {
  static styles = [css`
    label,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    li {
      white-space: break-spaces;
    }

    :host{
      width:100%
    }
  
  `]
  @property()
  source = "# Remarkable";

  @internalProperty()
  md = new Remarkable();

  @internalProperty()
  DOMPurify = createDOMPurify(window);

  render() {
    return html`${unsafeHTML(
      this.DOMPurify.sanitize(this.md.render(this.source))
    )}`;
  }
}
