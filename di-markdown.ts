import createDOMPurify from "dompurify";
import {
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
