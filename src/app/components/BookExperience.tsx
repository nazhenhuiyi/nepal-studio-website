"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { featuredBook } from "../bookData";
import styles from "../page.module.css";

type NavigationState = {
  type: "nepal-preview:ready" | "nepal-preview:page-changed";
  pageIndex: number;
  pageCount: number;
  visiblePageStart: number;
  visiblePageEnd: number;
  previousPageIndex: number | null;
  nextPageIndex: number | null;
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={direction === "right" ? styles.arrowRight : undefined}
    >
      <path d="M18 12H5m6-6-6 6 6 6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

function OpenIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5.5c3.2-.7 5.9 0 8 2.1 2.1-2.1 4.8-2.8 8-2.1v13c-3.2-.7-5.9 0-8 2.1-2.1-2.1-4.8-2.8-8-2.1v-13Z" />
      <path d="M12 7.6v13" />
    </svg>
  );
}

function Brand() {
  return (
    <span className={styles.brand}>
      <Image
        src="/brand/suonian-chengce-mark.png"
        alt=""
        width={32}
        height={40}
      />
      <span>
        <strong>所念成册</strong>
      </span>
    </span>
  );
}

export function BookExperience() {
  const [isBookOpen, setIsBookOpen] = useState(true);
  const [navigation, setNavigation] = useState<NavigationState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<NavigationState | null>(null);

  const closeBook = useCallback(() => {
    setIsBookOpen(false);
    navigationRef.current = null;
    setNavigation(null);
    setError(null);
    window.requestAnimationFrame(() => openButtonRef.current?.focus());
  }, []);

  const openBook = useCallback(() => {
    navigationRef.current = null;
    setNavigation(null);
    setError(null);
    setIsBookOpen(true);
  }, []);

  const turnTo = useCallback((pageIndex: number | null | undefined) => {
    if (
      typeof pageIndex !== "number" ||
      !Number.isInteger(pageIndex) ||
      pageIndex < 0
    ) {
      return;
    }

    frameRef.current?.contentWindow?.postMessage(
      {
        type: "nepal-preview:turn-to-page",
        pageIndex,
        animate: true,
      },
      "*",
    );
  }, []);

  useEffect(() => {
    if (!isBookOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleMessage = (event: MessageEvent) => {
      if (
        event.source !== frameRef.current?.contentWindow ||
        !event.data ||
        typeof event.data !== "object"
      ) {
        return;
      }

      if (event.data.type === "nepal-preview:error") {
        setError(
          typeof event.data.message === "string"
            ? event.data.message
            : "书籍打开失败",
        );
        return;
      }

      if (
        event.data.type === "nepal-preview:ready" ||
        event.data.type === "nepal-preview:page-changed"
      ) {
        const nextNavigation = event.data as NavigationState;
        navigationRef.current = nextNavigation;
        setNavigation(nextNavigation);
        setError(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeBook();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        turnTo(navigationRef.current?.previousPageIndex);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        turnTo(navigationRef.current?.nextPageIndex);
      }
    };

    window.addEventListener("message", handleMessage);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeBook, isBookOpen, turnTo]);

  return (
    <>
      <main
        className={styles.introPage}
        aria-hidden={isBookOpen}
        inert={isBookOpen ? true : undefined}
      >
        <header className={styles.introHeader}>
          <Brand />
          <span className={styles.headerNote}>AI 私人纪念作品创作台 · macOS</span>
        </header>

        <section className={styles.introHero}>
          <div className={styles.introCopy}>
            <h1>
              把真实的片段，
              <span>做成可以翻开的作品。</span>
            </h1>
            <p className={styles.introLead}>
              和 AI 对话，整理照片、文字与生活里的小片段。
              <br />
              做成一本可翻阅的 HTML 书，或一组可以继续编排的图片作品。
            </p>
            <button
              ref={openButtonRef}
              type="button"
              className={styles.openBookButton}
              onClick={openBook}
            >
              <OpenIcon />
              再次翻开《六月，向自然退一步》
            </button>
          </div>

          <div className={styles.introArtwork} aria-hidden="true">
            <div className={styles.introImageBack}>
              <Image
                src="/books/june-into-nature/assets/illustrations/quiet-water.webp"
                alt=""
                fill
                sizes="(max-width: 800px) 54vw, 22vw"
              />
            </div>
            <div className={styles.introImageFront}>
              <Image
                src={featuredBook.coverSrc}
                alt=""
                width={featuredBook.coverWidth}
                height={featuredBook.coverHeight}
                sizes="(max-width: 800px) 64vw, 28vw"
              />
            </div>
            <p>六月，向自然退一步</p>
          </div>
        </section>

        <footer className={styles.introFooter}>
          <span>所念成册</span>
          <span>HTML BOOK / IMAGE CANVAS / LOCAL FIRST</span>
        </footer>
      </main>

      {isBookOpen ? (
        <div className={styles.overlay} role="presentation">
          <section
            className={styles.bookDialog}
            role="dialog"
            aria-modal="true"
            aria-label={featuredBook.title}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.closeButton}
              onClick={closeBook}
              aria-label="关闭书籍，查看项目介绍"
            >
              <span>关闭</span>
              <CloseIcon />
            </button>

            <div className={styles.readerArea}>
              <iframe
                ref={frameRef}
                title={featuredBook.title}
                src={featuredBook.readerPath}
                className={styles.readerFrame}
              />
              {error ? (
                <p className={styles.readerError}>书籍打开失败：{error}</p>
              ) : null}
            </div>

            <footer className={styles.bookControls}>
              <button
                type="button"
                className={styles.navigationButton}
                onClick={() => turnTo(navigation?.previousPageIndex)}
                disabled={
                  !navigation || navigation.previousPageIndex === null
                }
              >
                <ArrowIcon direction="left" />
                <span>上一页</span>
              </button>
              <button
                type="button"
                className={styles.navigationButton}
                onClick={() => turnTo(navigation?.nextPageIndex)}
                disabled={!navigation || navigation.nextPageIndex === null}
              >
                <span>下一页</span>
                <ArrowIcon direction="right" />
              </button>
            </footer>
          </section>
        </div>
      ) : null}
    </>
  );
}
