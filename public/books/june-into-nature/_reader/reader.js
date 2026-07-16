var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
(function() {
  "use strict";
  var _button, _a;
  class NepalPolaroid extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
    render() {
      const src = this.getAttribute("src") ?? "";
      const caption = this.getAttribute("caption") ?? "";
      const alt = this.getAttribute("alt") ?? caption;
      if (!this.shadowRoot) {
        this.attachShadow({ mode: "open" });
      }
      this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          max-width: min(100%, 360px);
          color: var(--ink);
          transform: rotate(-2deg);
        }

        figure {
          margin: 0;
          padding: 16px 16px 22px;
          border: 1px solid color-mix(in srgb, var(--ink) 12%, transparent);
          border-radius: 6px;
          background: var(--paper-soft);
          box-shadow: 0 18px 32px var(--shadow);
        }

        img {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: 3px;
          background: var(--paper-muted);
        }

        figcaption {
          min-height: 22px;
          margin-top: 12px;
          font-family: var(--nepal-font-handwriting);
          font-size: 17px;
          line-height: 1.35;
          text-align: center;
        }
      </style>
      <figure>
        <img src="${escapeAttribute(src)}" alt="${escapeAttribute(alt)}" />
        <figcaption>${escapeHtml$1(caption)}</figcaption>
      </figure>
    `;
    }
  }
  __publicField(NepalPolaroid, "observedAttributes", ["src", "caption", "alt"]);
  class NepalEnvelope extends HTMLElement {
    constructor() {
      super(...arguments);
      __privateAdd(this, _button, null);
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
    resetInteraction() {
      this.removeAttribute("open");
      this.updateButtonState();
    }
    render() {
      var _a2;
      if (!this.shadowRoot) {
        this.attachShadow({ mode: "open" });
      }
      const openText = this.getAttribute("open-text") ?? "打开这封信";
      this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: min(100%, 430px);
          color: var(--ink);
        }

        .envelope {
          position: relative;
          min-height: 250px;
          padding: 22px;
        }

        .front,
        .inside {
          border: 1px solid color-mix(in srgb, var(--ink) 16%, transparent);
          border-radius: 6px;
          background: var(--paper-warm);
          box-shadow: 0 16px 28px color-mix(in srgb, var(--shadow) 72%, transparent);
        }

        .front {
          position: relative;
          display: grid;
          min-height: 170px;
          place-items: center;
          padding: 26px;
          overflow: hidden;
        }

        .front::before,
        .front::after {
          position: absolute;
          inset: auto 0 0;
          height: 58%;
          content: "";
          background:
            linear-gradient(145deg, transparent 49%, color-mix(in srgb, var(--ink) 12%, transparent) 50%, transparent 51%),
            linear-gradient(215deg, transparent 49%, color-mix(in srgb, var(--ink) 12%, transparent) 50%, transparent 51%);
          pointer-events: none;
        }

        .inside {
          position: relative;
          z-index: 2;
          display: none;
          margin: -132px 18px 0;
          padding: 26px;
          background: var(--paper-soft);
          transform: translateY(28px);
        }

        :host([open]) .inside {
          display: block;
          animation: letter-rise 220ms ease-out forwards;
        }

        button {
          position: relative;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          margin-top: 18px;
          padding: 0 14px;
          border: 1px solid color-mix(in srgb, var(--ink) 28%, transparent);
          border-radius: 999px;
          background: var(--ink);
          color: var(--paper-soft);
          font: inherit;
          cursor: pointer;
        }

        ::slotted(*) {
          margin: 0;
        }

        @keyframes letter-rise {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(-24px);
          }
        }
      </style>
      <div class="envelope">
        <div class="front">
          <slot name="front"></slot>
        </div>
        <div class="inside">
          <slot name="inside"></slot>
        </div>
        <button type="button">${escapeHtml$1(openText)}</button>
      </div>
    `;
      __privateSet(this, _button, this.shadowRoot.querySelector("button"));
      (_a2 = __privateGet(this, _button)) == null ? void 0 : _a2.addEventListener("click", () => {
        this.toggleAttribute("open");
        this.updateButtonState();
      });
      this.updateButtonState();
    }
    updateButtonState() {
      if (!__privateGet(this, _button)) {
        return;
      }
      __privateGet(this, _button).textContent = this.hasAttribute("open") ? "收起" : this.getAttribute("open-text") ?? "打开这封信";
    }
  }
  _button = new WeakMap();
  __publicField(NepalEnvelope, "observedAttributes", ["open-text"]);
  function escapeAttribute(value) {
    return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
  }
  function escapeHtml$1(value) {
    return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }
  customElements.define("nepal-polaroid", NepalPolaroid);
  customElements.define("nepal-envelope", NepalEnvelope);
  function clampBookPageIndex(pageIndex, pageCount) {
    const lastPageIndex = Math.max(0, pageCount - 1);
    const normalizedPageIndex = Number.isInteger(pageIndex) ? pageIndex : 0;
    return Math.min(Math.max(0, normalizedPageIndex), lastPageIndex);
  }
  function getBookNavigationState(pageIndex, pageCount, isLandscapeSpread2) {
    const boundedPageIndex = clampBookPageIndex(pageIndex, pageCount);
    const currentPageIndex = isLandscapeSpread2 && boundedPageIndex > 0 && boundedPageIndex % 2 === 0 ? boundedPageIndex - 1 : boundedPageIndex;
    const visiblePageStart = currentPageIndex;
    const visiblePageEnd = isLandscapeSpread2 && currentPageIndex > 0 ? Math.min(currentPageIndex + 1, Math.max(0, pageCount - 1)) : currentPageIndex;
    if (!isLandscapeSpread2) {
      return {
        currentPageIndex,
        visiblePageStart,
        visiblePageEnd,
        previousPageIndex: visiblePageStart > 0 ? visiblePageStart - 1 : null,
        nextPageIndex: visiblePageEnd + 1 < pageCount ? visiblePageEnd + 1 : null
      };
    }
    return {
      currentPageIndex,
      visiblePageStart,
      visiblePageEnd,
      previousPageIndex: visiblePageStart > 1 ? Math.max(1, visiblePageStart - 2) : visiblePageStart === 1 ? 0 : null,
      nextPageIndex: visiblePageEnd + 1 < pageCount ? visiblePageEnd + 1 : null
    };
  }
  function resolveBookPageTurn({
    currentPageIndex,
    targetPageIndex,
    pageCount,
    isLandscapeSpread: isLandscapeSpread2,
    animate
  }) {
    const navigation = getBookNavigationState(
      currentPageIndex,
      pageCount,
      isLandscapeSpread2
    );
    const boundedTargetPageIndex = clampBookPageIndex(targetPageIndex, pageCount);
    if (boundedTargetPageIndex >= navigation.visiblePageStart && boundedTargetPageIndex <= navigation.visiblePageEnd) {
      return {
        type: "report",
        pageIndex: navigation.currentPageIndex
      };
    }
    const normalizedTargetPageIndex = getBookNavigationState(
      boundedTargetPageIndex,
      pageCount,
      isLandscapeSpread2
    ).currentPageIndex;
    if (animate && normalizedTargetPageIndex === navigation.nextPageIndex) {
      return { type: "flip-next" };
    }
    if (animate && normalizedTargetPageIndex === navigation.previousPageIndex) {
      return { type: "flip-previous" };
    }
    return {
      type: "turn-to-page",
      pageIndex: normalizedTargetPageIndex
    };
  }
  function toNonNegativeNumber(value) {
    return Number.isFinite(value) ? Math.max(0, value) : 0;
  }
  function calculateBookViewportLayout({
    availableWidth,
    availableHeight,
    pageWidth,
    pageHeight,
    pagesPerView = 2
  }) {
    if (!Number.isFinite(pageWidth) || pageWidth <= 0) {
      throw new Error("pageWidth must be a positive number");
    }
    if (!Number.isFinite(pageHeight) || pageHeight <= 0) {
      throw new Error("pageHeight must be a positive number");
    }
    if (pagesPerView !== 1 && pagesPerView !== 2) {
      throw new Error("pagesPerView must be 1 or 2");
    }
    const bookWidth = pageWidth * pagesPerView;
    const bookHeight = pageHeight;
    const scale = Math.min(
      1,
      toNonNegativeNumber(availableWidth) / bookWidth,
      toNonNegativeNumber(availableHeight) / bookHeight
    );
    return {
      bookWidth,
      bookHeight,
      scale,
      renderedWidth: bookWidth * scale,
      renderedHeight: bookHeight * scale
    };
  }
  const SKIPPED_REFERENCE_PROTOCOLS = /* @__PURE__ */ new Set([
    "blob:",
    "data:",
    "http:",
    "https:",
    "javascript:",
    "mailto:",
    "nepal-library:",
    "nepal-preview:",
    "nepal-project:",
    "nepal-runtime:",
    "tel:"
  ]);
  const ATTRIBUTE_REFERENCES = [
    {
      selector: "img[src], video[src], audio[src], source[src], track[src], iframe[src], embed[src], nepal-polaroid[src]",
      attribute: "src"
    },
    { selector: "video[poster]", attribute: "poster" },
    { selector: "object[data]", attribute: "data" },
    {
      selector: 'a[href], link[href]:not([rel~="stylesheet"]), image[href], use[href]',
      attribute: "href"
    },
    {
      selector: "image[xlink\\:href], use[xlink\\:href]",
      attribute: "xlink:href"
    }
  ];
  function shouldRewriteMediaReference(value) {
    const trimmedValue = value.trim();
    if (trimmedValue.length === 0 || trimmedValue.startsWith("#")) {
      return false;
    }
    try {
      const parsedUrl = new URL(trimmedValue);
      return !SKIPPED_REFERENCE_PROTOCOLS.has(parsedUrl.protocol);
    } catch {
      return true;
    }
  }
  function resolvePageMediaReferenceFromRoot(value, pageFile, bookRootUrl) {
    const pageUrl = new URL(pageFile, bookRootUrl);
    return resolveMediaReferenceFromUrl(value, pageUrl);
  }
  function resolveMediaReferenceFromUrl(value, baseUrl) {
    if (!shouldRewriteMediaReference(value)) {
      return value;
    }
    return new URL(value, baseUrl).toString();
  }
  function rewriteSrcsetReferencesFromRoot(value, pageFile, bookRootUrl) {
    return value.split(",").map((candidate) => {
      const trimmedCandidate = candidate.trim();
      if (!trimmedCandidate) {
        return "";
      }
      const [url = "", ...descriptors] = trimmedCandidate.split(/\s+/);
      return [resolvePageMediaReferenceFromRoot(url, pageFile, bookRootUrl), ...descriptors].join(" ");
    }).filter(Boolean).join(", ");
  }
  function isCssIdentifierCharacter$1(value) {
    return /[a-zA-Z0-9_-]/u.test(value ?? "");
  }
  function findQuotedValueEnd$1(value, startIndex, quote) {
    let index = startIndex;
    while (index < value.length) {
      if (value[index] === "\\") {
        index += 2;
        continue;
      }
      if (value[index] === quote) {
        return index;
      }
      index += 1;
    }
    return -1;
  }
  function findUnquotedUrlEnd(value, startIndex) {
    let index = startIndex;
    while (index < value.length) {
      if (value[index] === "\\") {
        index += 2;
        continue;
      }
      if (value[index] === ")") {
        return index;
      }
      index += 1;
    }
    return -1;
  }
  function rewriteCssReferencesFromUrl(value, baseUrl) {
    let index = 0;
    let copiedUntil = 0;
    let rewritten = "";
    while (index < value.length) {
      if (value.startsWith("/*", index)) {
        const commentEnd = value.indexOf("*/", index + 2);
        index = commentEnd === -1 ? value.length : commentEnd + 2;
        continue;
      }
      if (value[index] === '"' || value[index] === "'") {
        const stringEnd = findQuotedValueEnd$1(value, index + 1, value[index]);
        index = stringEnd === -1 ? value.length : stringEnd + 1;
        continue;
      }
      if (value.slice(index, index + 3).toLowerCase() !== "url" || isCssIdentifierCharacter$1(value[index - 1]) || isCssIdentifierCharacter$1(value[index + 3])) {
        index += 1;
        continue;
      }
      let cursor = index + 3;
      while (/\s/u.test(value[cursor] ?? "")) {
        cursor += 1;
      }
      if (value[cursor] !== "(") {
        index += 3;
        continue;
      }
      cursor += 1;
      while (/\s/u.test(value[cursor] ?? "")) {
        cursor += 1;
      }
      const quote = value[cursor] === '"' || value[cursor] === "'" ? value[cursor] : "";
      let referenceStart = cursor;
      let referenceEnd = -1;
      let functionEnd = -1;
      if (quote) {
        referenceStart += 1;
        referenceEnd = findQuotedValueEnd$1(value, referenceStart, quote);
        if (referenceEnd !== -1) {
          cursor = referenceEnd + 1;
          while (/\s/u.test(value[cursor] ?? "")) {
            cursor += 1;
          }
          functionEnd = value[cursor] === ")" ? cursor : -1;
        }
      } else {
        functionEnd = findUnquotedUrlEnd(value, referenceStart);
        if (functionEnd !== -1) {
          referenceEnd = functionEnd;
          while (referenceEnd > referenceStart && /\s/u.test(value[referenceEnd - 1])) {
            referenceEnd -= 1;
          }
        }
      }
      if (referenceEnd === -1 || functionEnd === -1) {
        index += 3;
        continue;
      }
      const reference = value.slice(referenceStart, referenceEnd);
      const resolved = resolveMediaReferenceFromUrl(reference, baseUrl);
      if (resolved !== reference) {
        rewritten += value.slice(copiedUntil, referenceStart) + resolved;
        copiedUntil = referenceEnd;
      }
      index = functionEnd + 1;
    }
    return rewritten ? rewritten + value.slice(copiedUntil) : value;
  }
  function rewriteCssReferencesFromRoot(value, pageFile, bookRootUrl) {
    const pageUrl = new URL(pageFile, bookRootUrl);
    return rewriteCssReferencesFromUrl(value, pageUrl);
  }
  function rewritePageMediaReferencesFromRoot(root, pageFile, bookRootUrl) {
    for (const reference of ATTRIBUTE_REFERENCES) {
      for (const element of root.querySelectorAll(reference.selector)) {
        const currentValue = element.getAttribute(reference.attribute);
        if (currentValue) {
          element.setAttribute(
            reference.attribute,
            resolvePageMediaReferenceFromRoot(currentValue, pageFile, bookRootUrl)
          );
        }
      }
    }
    for (const element of root.querySelectorAll("[srcset]")) {
      const currentValue = element.getAttribute("srcset");
      if (currentValue) {
        element.setAttribute(
          "srcset",
          rewriteSrcsetReferencesFromRoot(currentValue, pageFile, bookRootUrl)
        );
      }
    }
    for (const element of root.querySelectorAll("[style]")) {
      const currentValue = element.getAttribute("style");
      if (currentValue) {
        element.setAttribute(
          "style",
          rewriteCssReferencesFromRoot(currentValue, pageFile, bookRootUrl)
        );
      }
    }
  }
  const MAX_STYLESHEET_IMPORT_DEPTH = 8;
  function isCssIdentifierCharacter(value) {
    return /[a-zA-Z0-9_-]/u.test(value ?? "");
  }
  function findQuotedValueEnd(value, startIndex, quote) {
    let index = startIndex;
    while (index < value.length) {
      if (value[index] === "\\") {
        index += 2;
        continue;
      }
      if (value[index] === quote) {
        return index;
      }
      index += 1;
    }
    return -1;
  }
  function findImportRuleEnd(css, startIndex) {
    let index = startIndex;
    let parentheses = 0;
    let quote = "";
    while (index < css.length) {
      if (quote) {
        if (css[index] === "\\") {
          index += 2;
          continue;
        }
        if (css[index] === quote) {
          quote = "";
        }
        index += 1;
        continue;
      }
      if (css.startsWith("/*", index)) {
        const commentEnd = css.indexOf("*/", index + 2);
        index = commentEnd === -1 ? css.length : commentEnd + 2;
        continue;
      }
      if (css[index] === '"' || css[index] === "'") {
        quote = css[index];
        index += 1;
        continue;
      }
      if (css[index] === "(") {
        parentheses += 1;
      } else if (css[index] === ")") {
        parentheses = Math.max(0, parentheses - 1);
      } else if (css[index] === ";" && parentheses === 0) {
        return index;
      } else if (css[index] === "{" && parentheses === 0) {
        return -1;
      }
      index += 1;
    }
    return -1;
  }
  function parseImportPrelude(prelude) {
    const value = prelude.trim();
    if (!value) {
      throw new Error("CSS @import is missing a stylesheet URL");
    }
    if (value[0] === '"' || value[0] === "'") {
      const quote2 = value[0];
      const end = findQuotedValueEnd(value, 1, quote2);
      if (end === -1) {
        throw new Error("CSS @import contains an unterminated URL string");
      }
      return {
        reference: value.slice(1, end),
        conditions: value.slice(end + 1).trim()
      };
    }
    if (value.slice(0, 3).toLowerCase() !== "url" || isCssIdentifierCharacter(value[3])) {
      throw new Error(`Unsupported CSS @import rule: ${value}`);
    }
    let cursor = 3;
    while (/\s/u.test(value[cursor] ?? "")) {
      cursor += 1;
    }
    if (value[cursor] !== "(") {
      throw new Error(`Unsupported CSS @import rule: ${value}`);
    }
    cursor += 1;
    while (/\s/u.test(value[cursor] ?? "")) {
      cursor += 1;
    }
    const quote = value[cursor] === '"' || value[cursor] === "'" ? value[cursor] : "";
    const referenceStart = quote ? cursor + 1 : cursor;
    let referenceEnd = -1;
    let functionEnd = -1;
    if (quote) {
      referenceEnd = findQuotedValueEnd(value, referenceStart, quote);
      cursor = referenceEnd === -1 ? value.length : referenceEnd + 1;
      while (/\s/u.test(value[cursor] ?? "")) {
        cursor += 1;
      }
      functionEnd = value[cursor] === ")" ? cursor : -1;
    } else {
      functionEnd = value.indexOf(")", referenceStart);
      referenceEnd = functionEnd;
      while (referenceEnd > referenceStart && /\s/u.test(value[referenceEnd - 1])) {
        referenceEnd -= 1;
      }
    }
    if (referenceEnd < referenceStart || functionEnd === -1) {
      throw new Error(`Unsupported CSS @import rule: ${value}`);
    }
    return {
      reference: value.slice(referenceStart, referenceEnd),
      conditions: value.slice(functionEnd + 1).trim()
    };
  }
  function extractTopLevelImports(css) {
    const imports = [];
    const bodyParts = [];
    let copiedUntil = 0;
    let depth = 0;
    let index = 0;
    while (index < css.length) {
      if (css.startsWith("/*", index)) {
        const commentEnd = css.indexOf("*/", index + 2);
        index = commentEnd === -1 ? css.length : commentEnd + 2;
        continue;
      }
      if (css[index] === '"' || css[index] === "'") {
        const stringEnd = findQuotedValueEnd(css, index + 1, css[index]);
        index = stringEnd === -1 ? css.length : stringEnd + 1;
        continue;
      }
      if (css[index] === "{") {
        depth += 1;
        index += 1;
        continue;
      }
      if (css[index] === "}") {
        depth = Math.max(0, depth - 1);
        index += 1;
        continue;
      }
      if (depth === 0 && css.slice(index, index + 7).toLowerCase() === "@import" && !isCssIdentifierCharacter(css[index + 7])) {
        const ruleEnd = findImportRuleEnd(css, index + 7);
        if (ruleEnd === -1) {
          throw new Error("CSS @import rule must end with a semicolon");
        }
        bodyParts.push(css.slice(copiedUntil, index));
        imports.push(parseImportPrelude(css.slice(index + 7, ruleEnd)));
        copiedUntil = ruleEnd + 1;
        index = ruleEnd + 1;
        continue;
      }
      index += 1;
    }
    bodyParts.push(css.slice(copiedUntil));
    return { imports, body: bodyParts.join("") };
  }
  function consumeFunction(value, name) {
    if (value.slice(0, name.length).toLowerCase() !== name) {
      return null;
    }
    let cursor = name.length;
    while (/\s/u.test(value[cursor] ?? "")) {
      cursor += 1;
    }
    if (value[cursor] !== "(") {
      return null;
    }
    const contentStart = cursor + 1;
    let depth = 1;
    let quote = "";
    cursor += 1;
    while (cursor < value.length) {
      if (quote) {
        if (value[cursor] === "\\") {
          cursor += 2;
          continue;
        }
        if (value[cursor] === quote) {
          quote = "";
        }
      } else if (value[cursor] === '"' || value[cursor] === "'") {
        quote = value[cursor];
      } else if (value[cursor] === "(") {
        depth += 1;
      } else if (value[cursor] === ")") {
        depth -= 1;
        if (depth === 0) {
          return {
            content: value.slice(contentStart, cursor).trim(),
            rest: value.slice(cursor + 1).trim()
          };
        }
      }
      cursor += 1;
    }
    throw new Error(`CSS @import has an unterminated ${name}(...) modifier`);
  }
  function wrapImportedCss(css, conditions) {
    let rest = conditions.trim();
    const wrappers = [];
    const layer = consumeFunction(rest, "layer");
    if (layer) {
      if (!layer.content) {
        throw new Error("CSS @import layer name cannot be empty");
      }
      wrappers.push(`@layer ${layer.content}`);
      rest = layer.rest;
    } else if (rest.slice(0, 5).toLowerCase() === "layer" && !isCssIdentifierCharacter(rest[5])) {
      wrappers.push("@layer");
      rest = rest.slice(5).trim();
    }
    const supports = consumeFunction(rest, "supports");
    if (supports) {
      if (!supports.content) {
        throw new Error("CSS @import supports condition cannot be empty");
      }
      wrappers.push(`@supports (${supports.content})`);
      rest = supports.rest;
    }
    if (rest) {
      wrappers.push(`@media ${rest}`);
    }
    return wrappers.reduceRight(
      (result, wrapper) => `${wrapper} {
${result}
}
`,
      css
    );
  }
  async function prepareStylesheetCss(css, stylesheetUrl, fetchImpl = fetch, ancestry = []) {
    const { imports, body } = extractTopLevelImports(css);
    const importedCss = await Promise.all(
      imports.map(async ({ reference, conditions }) => {
        const importUrl = new URL(reference, stylesheetUrl);
        const imported = await loadStylesheetCss(
          importUrl,
          fetchImpl,
          ancestry
        );
        return wrapImportedCss(imported, conditions);
      })
    );
    const localCss = rewriteCssReferencesFromUrl(body, stylesheetUrl);
    return [...importedCss, localCss].filter(Boolean).join("\n");
  }
  async function loadStylesheetCss(stylesheetUrl, fetchImpl = fetch, ancestry = []) {
    const source = stylesheetUrl.toString();
    if (ancestry.includes(source)) {
      throw new Error(`Circular CSS @import detected at ${source}`);
    }
    if (ancestry.length >= MAX_STYLESHEET_IMPORT_DEPTH) {
      throw new Error(
        `CSS @import depth exceeds ${MAX_STYLESHEET_IMPORT_DEPTH} at ${source}`
      );
    }
    const response = await fetchImpl(stylesheetUrl);
    if (!response.ok) {
      throw new Error(`Failed to load stylesheet ${source}: ${response.status}`);
    }
    return prepareStylesheetCss(
      await response.text(),
      stylesheetUrl,
      fetchImpl,
      [...ancestry, source]
    );
  }
  const BOOK_GLOBAL_STYLES_FILE = "assets/global.css";
  function createPageScopeToken(pageIndex) {
    return `page-${pageIndex}`;
  }
  function wrapCssInScope(css, scopeSelector) {
    return `@scope (${scopeSelector}) {
${css}
}
`;
  }
  function createScopedStyleElement(css, scopeSelector, source, ownerDocument) {
    const style = ownerDocument.createElement("style");
    style.dataset.nepalStyleSource = source;
    style.textContent = wrapCssInScope(css, scopeSelector);
    return style;
  }
  async function inlinePageStylesheet(link, pageUrl, scopeSelector, fetchImpl, ownerDocument) {
    const href = link.getAttribute("href");
    if (!(href == null ? void 0 : href.trim())) {
      throw new Error("Page stylesheet link must have a non-empty href");
    }
    const stylesheetUrl = new URL(href, pageUrl);
    const css = await loadStylesheetCss(stylesheetUrl, fetchImpl);
    const style = createScopedStyleElement(
      css,
      scopeSelector,
      stylesheetUrl.toString(),
      ownerDocument
    );
    const media = link.getAttribute("media");
    if (media) {
      style.setAttribute("media", media);
    }
    link.replaceWith(style);
  }
  async function scopePageStyles(pageRoot, wrapper, pageUrl, pageIndex, fetchImpl = fetch) {
    const scopeToken = createPageScopeToken(pageIndex);
    const scopeSelector = `[data-nepal-page-scope="${scopeToken}"]`;
    const ownerDocument = pageRoot.ownerDocument;
    wrapper.dataset.nepalPageScope = scopeToken;
    const stylesheetLinks = [
      ...pageRoot.querySelectorAll('link[rel~="stylesheet"]')
    ];
    await Promise.all(
      stylesheetLinks.map(
        (link) => inlinePageStylesheet(
          link,
          pageUrl,
          scopeSelector,
          fetchImpl,
          ownerDocument
        )
      )
    );
    await Promise.all(
      [...pageRoot.querySelectorAll("style")].filter((style) => !style.dataset.nepalStyleSource).map(async (style) => {
        const css = await prepareStylesheetCss(
          style.textContent ?? "",
          pageUrl,
          fetchImpl
        );
        style.dataset.nepalStyleSource = "inline";
        style.textContent = wrapCssInScope(css, scopeSelector);
      })
    );
  }
  async function installBookGlobalStyles(bookRootUrl, ownerDocument = document, fetchImpl = fetch) {
    const stylesheetUrl = new URL(BOOK_GLOBAL_STYLES_FILE, bookRootUrl);
    const css = await loadStylesheetCss(stylesheetUrl, fetchImpl);
    const style = createScopedStyleElement(
      css,
      ".page",
      BOOK_GLOBAL_STYLES_FILE,
      ownerDocument
    );
    ownerDocument.head.append(style);
  }
  const state = {
    currentPageIndex: 0,
    layoutAnimationFrame: 0,
    layoutObserver: null,
    manifest: null,
    pageElements: [],
    pageFlip: null,
    projectId: "",
    loadId: new URL(window.location.href).searchParams.get("v") ?? "0"
  };
  const publishedBook = window.__NEPAL_PUBLISHED_BOOK__ ?? null;
  const prefersReducedMotion = (_a = window.matchMedia) == null ? void 0 : _a.call(
    window,
    "(prefers-reduced-motion: reduce)"
  ).matches;
  function postToShell(message) {
    var _a2;
    (_a2 = window.parent) == null ? void 0 : _a2.postMessage(message, "*");
  }
  function getProjectId() {
    const root = document.getElementById("book-root");
    const projectId = root == null ? void 0 : root.dataset.projectId;
    if (!projectId) {
      throw new Error("Missing preview project id");
    }
    return projectId;
  }
  function getInitialPageIndex() {
    const url = new URL(window.location.href);
    const pageIndex = Number(url.searchParams.get("page") ?? "0");
    return Number.isInteger(pageIndex) && pageIndex >= 0 ? pageIndex : 0;
  }
  function getBookRootUrl() {
    if (publishedBook) {
      const root = document.getElementById("book-root");
      return new URL((root == null ? void 0 : root.dataset.publicationRoot) ?? ".", window.location.href).toString();
    }
    return `nepal-project://project/${encodeURIComponent(state.projectId)}/`;
  }
  function resolvePageReference(value, pageFile) {
    return resolvePageMediaReferenceFromRoot(value, pageFile, getBookRootUrl());
  }
  function validateManifest(value) {
    if (!value || typeof value !== "object") {
      throw new Error("book.json must be an object");
    }
    if (value.version !== 1) {
      throw new Error("book.json version must be 1");
    }
    if (!value.pageSize || typeof value.pageSize !== "object") {
      throw new Error("book.json pageSize is missing");
    }
    if (!Array.isArray(value.pages) || value.pages.length === 0) {
      throw new Error("book.json pages must be a non-empty array");
    }
    return value;
  }
  async function fetchText(url) {
    const publishedText = getPublishedText(url);
    if (publishedText !== null) {
      return publishedText;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.status}`);
    }
    return response.text();
  }
  function getPublishedRelativePath(url) {
    if (!publishedBook) {
      return null;
    }
    const rootUrl = new URL(getBookRootUrl());
    const targetUrl = new URL(url, rootUrl);
    if (rootUrl.origin !== targetUrl.origin || !targetUrl.pathname.startsWith(rootUrl.pathname)) {
      return null;
    }
    try {
      return decodeURIComponent(targetUrl.pathname.slice(rootUrl.pathname.length));
    } catch {
      return null;
    }
  }
  function getPublishedText(url) {
    var _a2;
    const relativePath = getPublishedRelativePath(url);
    if (!relativePath || typeof ((_a2 = publishedBook == null ? void 0 : publishedBook.files) == null ? void 0 : _a2[relativePath]) !== "string") {
      return null;
    }
    return publishedBook.files[relativePath];
  }
  async function publicationFetch(input) {
    const url = typeof input === "string" ? input : input.toString();
    const publishedText = getPublishedText(url);
    if (publishedText === null) {
      return new Response("Not found", { status: 404 });
    }
    return new Response(publishedText, { status: 200 });
  }
  async function loadManifest() {
    if (publishedBook) {
      return validateManifest(publishedBook.manifest);
    }
    const response = await fetch(new URL("book.json", getBookRootUrl()));
    if (!response.ok) {
      throw new Error(`Failed to load book.json: ${response.status}`);
    }
    return validateManifest(await response.json());
  }
  function extractPageRoot(html, pageFile) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    const pageRoot = template.content.querySelector(".page");
    if (!pageRoot) {
      throw new Error(`${pageFile} is missing a .page root`);
    }
    return pageRoot;
  }
  async function runPageScripts(pageRoot, pageFile) {
    const scripts = [...pageRoot.querySelectorAll("script")];
    for (const script of scripts) {
      script.remove();
    }
    for (const script of scripts) {
      const nextScript = document.createElement("script");
      for (const attribute of script.attributes) {
        if (attribute.name === "src") {
          const sourceUrl = resolvePageReference(attribute.value, pageFile);
          const publishedSource = getPublishedText(sourceUrl);
          if (publishedSource === null) {
            nextScript.setAttribute("src", sourceUrl);
          } else {
            nextScript.textContent = publishedSource;
          }
        } else {
          nextScript.setAttribute(attribute.name, attribute.value);
        }
      }
      if (!nextScript.textContent) {
        nextScript.textContent = script.textContent;
      }
      pageRoot.append(nextScript);
    }
    pageRoot.dispatchEvent(
      new CustomEvent("nepal:page-mount", {
        bubbles: true,
        detail: { pageFile }
      })
    );
  }
  async function createPageElement(page, pageIndex) {
    const pageUrl = new URL(page.file, getBookRootUrl());
    const html = await fetchText(pageUrl);
    const pageRoot = extractPageRoot(html, page.file);
    rewritePageMediaReferencesFromRoot(pageRoot, page.file, getBookRootUrl());
    const wrapper = document.createElement("article");
    wrapper.className = "book-page";
    wrapper.dataset.pageId = page.id;
    wrapper.dataset.source = page.file;
    wrapper.dataset.density = page.id === "cover" ? "hard" : "soft";
    await scopePageStyles(
      pageRoot,
      wrapper,
      pageUrl,
      pageIndex,
      publishedBook ? publicationFetch : fetch
    );
    wrapper.append(pageRoot);
    await runPageScripts(pageRoot, page.file);
    return wrapper;
  }
  async function waitForBookFonts() {
    if (!document.fonts) {
      return;
    }
    const pageText = state.pageElements.map((pageElement) => pageElement.textContent ?? "").join(" ");
    await document.fonts.load('16px "Xiaolai SC"', pageText);
    await document.fonts.ready;
  }
  function isLandscapeSpread() {
    var _a2, _b, _c, _d;
    return ((_b = (_a2 = state.pageFlip) == null ? void 0 : _a2.getOrientation) == null ? void 0 : _b.call(_a2)) === "landscape" && ((_d = (_c = state.pageFlip) == null ? void 0 : _c.getSettings) == null ? void 0 : _d.call(_c).showCover) === true;
  }
  function getNavigationState(pageIndex) {
    return getBookNavigationState(
      pageIndex,
      state.pageElements.length,
      isLandscapeSpread()
    );
  }
  function getVisiblePageRange(pageIndex) {
    const { visiblePageStart, visiblePageEnd } = getNavigationState(pageIndex);
    return { visiblePageStart, visiblePageEnd };
  }
  function getNavigationTargets(pageIndex) {
    const { previousPageIndex, nextPageIndex } = getNavigationState(pageIndex);
    return { previousPageIndex, nextPageIndex };
  }
  function syncPageElementState(pageIndex) {
    const { visiblePageStart, visiblePageEnd } = getVisiblePageRange(pageIndex);
    state.pageElements.forEach((pageElement, index) => {
      const isVisible = index >= visiblePageStart && index <= visiblePageEnd;
      pageElement.classList.toggle("is-active", isVisible);
      pageElement.setAttribute("aria-hidden", isVisible ? "false" : "true");
    });
  }
  function reportPageChange(pageIndex) {
    const pageCount = state.pageElements.length;
    const {
      currentPageIndex,
      visiblePageStart,
      visiblePageEnd,
      previousPageIndex,
      nextPageIndex
    } = getNavigationState(pageIndex);
    state.currentPageIndex = currentPageIndex;
    syncPageElementState(currentPageIndex);
    postToShell({
      type: "nepal-preview:page-changed",
      loadId: state.loadId,
      pageIndex: currentPageIndex,
      pageCount,
      visiblePageStart,
      visiblePageEnd,
      previousPageIndex,
      nextPageIndex
    });
  }
  function setActivePage(pageIndex, options = {}) {
    const pageCount = state.pageElements.length;
    const targetPageIndex = clampBookPageIndex(pageIndex, pageCount);
    const shouldAnimate = options.animate !== false && !prefersReducedMotion;
    if (!state.pageFlip) {
      reportPageChange(targetPageIndex);
      return;
    }
    const currentPageIndex = state.pageFlip.getCurrentPageIndex();
    const turn = resolveBookPageTurn({
      currentPageIndex,
      targetPageIndex,
      pageCount,
      isLandscapeSpread: isLandscapeSpread(),
      animate: shouldAnimate
    });
    if (turn.type === "report") {
      reportPageChange(turn.pageIndex);
    } else if (turn.type === "flip-next") {
      state.pageFlip.flipNext("bottom");
    } else if (turn.type === "flip-previous") {
      state.pageFlip.flipPrev("bottom");
    } else {
      state.pageFlip.turnToPage(turn.pageIndex);
    }
  }
  function initializePageFlip(bookElement) {
    var _a2, _b;
    const PageFlip = (_a2 = window.St) == null ? void 0 : _a2.PageFlip;
    if (!PageFlip) {
      throw new Error("PageFlip runtime is not loaded");
    }
    const pageWidth = state.manifest.pageSize.width;
    const pageHeight = state.manifest.pageSize.height;
    state.pageFlip = new PageFlip(bookElement, {
      width: pageWidth,
      height: pageHeight,
      size: "fixed",
      autoSize: false,
      drawShadow: !prefersReducedMotion,
      flippingTime: prefersReducedMotion ? 1 : 620,
      maxShadowOpacity: prefersReducedMotion ? 0 : 0.2,
      showCover: true,
      usePortrait: ((_b = document.getElementById("book-root")) == null ? void 0 : _b.dataset.usePortrait) === "true",
      useMouseEvents: false,
      clickEventForward: true,
      mobileScrollSupport: false,
      showPageCorners: false,
      disableFlipByClick: true,
      startPage: Math.min(
        Math.max(0, state.currentPageIndex),
        Math.max(0, state.pageElements.length - 1)
      )
    });
    state.pageFlip.on("flip", (event) => {
      reportPageChange(Number(event.data));
    });
    state.pageFlip.on("changeOrientation", () => {
      reportPageChange(state.pageFlip.getCurrentPageIndex());
    });
    state.pageFlip.loadFromHTML(state.pageElements);
  }
  function updateBookLayout(availableWidth, availableHeight) {
    var _a2;
    const usePortrait = ((_a2 = document.getElementById("book-root")) == null ? void 0 : _a2.dataset.usePortrait) === "true";
    const pagesPerView = usePortrait && availableWidth < availableHeight ? 1 : 2;
    const layout = calculateBookViewportLayout({
      availableWidth,
      availableHeight,
      pageWidth: state.manifest.pageSize.width,
      pageHeight: state.manifest.pageSize.height,
      pagesPerView
    });
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty("--book-scale", String(layout.scale));
    rootStyle.setProperty("--book-rendered-width", `${layout.renderedWidth}px`);
    rootStyle.setProperty("--book-rendered-height", `${layout.renderedHeight}px`);
    rootStyle.setProperty("--book-spread-width", `${layout.bookWidth}px`);
  }
  function getContentBoxSize(element) {
    const style = window.getComputedStyle(element);
    const horizontalPadding = Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight);
    const verticalPadding = Number.parseFloat(style.paddingTop) + Number.parseFloat(style.paddingBottom);
    return {
      width: Math.max(0, element.clientWidth - horizontalPadding),
      height: Math.max(0, element.clientHeight - verticalPadding)
    };
  }
  function installBookLayoutObserver(readerElement) {
    var _a2;
    const initialSize = getContentBoxSize(readerElement);
    updateBookLayout(initialSize.width, initialSize.height);
    (_a2 = state.layoutObserver) == null ? void 0 : _a2.disconnect();
    state.layoutObserver = new ResizeObserver((entries) => {
      const entry = entries.at(-1);
      if (!entry) {
        return;
      }
      window.cancelAnimationFrame(state.layoutAnimationFrame);
      state.layoutAnimationFrame = window.requestAnimationFrame(() => {
        updateBookLayout(entry.contentRect.width, entry.contentRect.height);
      });
    });
    state.layoutObserver.observe(readerElement);
  }
  function resetInteractions() {
    for (const pageElement of state.pageElements) {
      for (const element of pageElement.querySelectorAll("*")) {
        if (typeof element.resetInteraction === "function") {
          element.resetInteraction();
        }
      }
      pageElement.dispatchEvent(
        new CustomEvent("nepal:reset-interactions", {
          bubbles: true
        })
      );
    }
  }
  function installShellMessageListener() {
    window.addEventListener("message", (event) => {
      const message = event.data;
      if (!message || typeof message !== "object") {
        return;
      }
      if (message.type === "nepal-preview:turn-to-page" && Number.isInteger(message.pageIndex) && message.pageIndex >= 0 && typeof message.animate === "boolean") {
        setActivePage(message.pageIndex, {
          animate: message.animate
        });
      }
      if (message.type === "nepal-preview:reset-interactions") {
        resetInteractions();
      }
    });
  }
  function renderError(error) {
    const root = document.getElementById("book-root");
    const message = error instanceof Error ? error.message : String(error);
    if (root) {
      root.innerHTML = `<div class="nepal-reader"><div class="preview-error">${escapeHtml(
        message
      )}</div></div>`;
    }
    postToShell({
      type: "nepal-preview:error",
      loadId: state.loadId,
      message
    });
  }
  function escapeHtml(value) {
    return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }
  async function boot() {
    state.projectId = publishedBook ? "published" : getProjectId();
    state.currentPageIndex = getInitialPageIndex();
    state.manifest = await loadManifest();
    document.documentElement.style.setProperty(
      "--book-page-width",
      `${state.manifest.pageSize.width}px`
    );
    document.documentElement.style.setProperty(
      "--book-page-height",
      `${state.manifest.pageSize.height}px`
    );
    document.documentElement.style.setProperty(
      "--book-page-aspect-ratio",
      `${state.manifest.pageSize.width} / ${state.manifest.pageSize.height}`
    );
    document.documentElement.style.setProperty(
      "--book-spread-aspect-ratio",
      `${state.manifest.pageSize.width * 2} / ${state.manifest.pageSize.height}`
    );
    document.documentElement.style.setProperty(
      "--book-spread-width",
      `${state.manifest.pageSize.width * 2}px`
    );
    const root = document.getElementById("book-root");
    if (!root) {
      throw new Error("Missing book-root element");
    }
    root.innerHTML = `
    <div class="nepal-reader">
      <div class="nepal-reader__viewport">
        <div class="nepal-reader__stage" aria-label="${escapeHtml(state.manifest.title)}">
          <div class="nepal-reader__book"></div>
        </div>
      </div>
    </div>
  `;
    const readerElement = root.querySelector(".nepal-reader");
    const bookElement = root.querySelector(".nepal-reader__book");
    if (!readerElement || !bookElement) {
      throw new Error("Missing book layout container");
    }
    installBookLayoutObserver(readerElement);
    if (root.dataset.hasGlobalStyles === "true") {
      await installBookGlobalStyles(
        getBookRootUrl(),
        document,
        publishedBook ? publicationFetch : fetch
      );
    }
    state.pageElements = await Promise.all(state.manifest.pages.map(createPageElement));
    await waitForBookFonts();
    initializePageFlip(bookElement);
    installShellMessageListener();
    setActivePage(state.currentPageIndex, { animate: false });
    postToShell({
      type: "nepal-preview:ready",
      loadId: state.loadId,
      pageIndex: state.currentPageIndex,
      pageCount: state.pageElements.length,
      ...getVisiblePageRange(state.currentPageIndex),
      ...getNavigationTargets(state.currentPageIndex),
      title: state.manifest.title
    });
  }
  boot().catch(renderError);
})();
