/* global document, window */

const iframe = document.querySelector("iframe");
const pageLabel = document.querySelector("[data-page-label]");
const errorLabel = document.querySelector("[data-error]");
const previousButtons = [...document.querySelectorAll('[data-action="previous"]')];
const nextButtons = [...document.querySelectorAll('[data-action="next"]')];
let navigation = null;
let touchStart = null;

function send(message) {
  iframe?.contentWindow?.postMessage(message, "*");
}

function updateControls() {
  const canGoPrevious = navigation?.previousPageIndex !== null;
  const canGoNext = navigation?.nextPageIndex !== null;

  previousButtons.forEach((button) => {
    button.disabled = !canGoPrevious;
  });
  nextButtons.forEach((button) => {
    button.disabled = !canGoNext;
  });

  if (!navigation || !pageLabel) {
    return;
  }

  const start = navigation.visiblePageStart + 1;
  const end = navigation.visiblePageEnd + 1;
  pageLabel.textContent = start === end
    ? `第 ${start} / ${navigation.pageCount} 页`
    : `第 ${start}-${end} / ${navigation.pageCount} 页`;
}

function turnTo(pageIndex) {
  if (Number.isInteger(pageIndex) && pageIndex >= 0) {
    send({ type: "nepal-preview:turn-to-page", pageIndex, animate: true });
  }
}

function turnPrevious() {
  turnTo(navigation?.previousPageIndex);
}

function turnNext() {
  turnTo(navigation?.nextPageIndex);
}

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", async () => {
    const action = button.dataset.action;

    if (action === "previous") {
      turnPrevious();
    } else if (action === "next") {
      turnNext();
    } else if (action === "reset") {
      send({ type: "nepal-preview:reset-interactions" });
    } else if (action === "fullscreen" && document.fullscreenEnabled) {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    }
  });
});

window.addEventListener("message", (event) => {
  if (event.source !== iframe?.contentWindow || !event.data || typeof event.data !== "object") {
    return;
  }

  if (event.data.type === "nepal-preview:error") {
    errorLabel.hidden = false;
    errorLabel.textContent = `书籍打开失败：${event.data.message}`;
    return;
  }

  if (event.data.type === "nepal-preview:ready" || event.data.type === "nepal-preview:page-changed") {
    navigation = event.data;
    errorLabel.hidden = true;
    updateControls();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) {
    return;
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    turnPrevious();
  } else if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    turnNext();
  }
});

const readerFrame = document.querySelector(".publication-reader-frame");

readerFrame?.addEventListener("touchstart", (event) => {
  const touch = event.changedTouches[0];
  touchStart = touch ? { x: touch.clientX, y: touch.clientY } : null;
}, { passive: true });

readerFrame?.addEventListener("touchend", (event) => {
  const touch = event.changedTouches[0];
  if (!touchStart || !touch) {
    return;
  }

  const deltaX = touch.clientX - touchStart.x;
  const deltaY = touch.clientY - touchStart.y;
  touchStart = null;

  if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) {
    return;
  }

  if (deltaX < 0) {
    turnNext();
  } else {
    turnPrevious();
  }
}, { passive: true });

if (!document.fullscreenEnabled) {
  document.querySelector('[data-action="fullscreen"]')?.setAttribute("hidden", "");
}

updateControls();
