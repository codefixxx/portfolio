'use client';
import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { boot, cleanup, enter, leave, onPage, type PageFn } from './index';

export function Engine({ setup }: { setup?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const mode = useRef<'idle' | 'push' | 'pop'>('idle');
  const first = useRef(true);

  // Defer boot to ensure React has fully mounted and hydrated the DOM
  useEffect(() => {
    let animId: number;
    const timer = setTimeout(() => {
      animId = requestAnimationFrame(() => {
        boot(setup);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [setup]);

  useEffect(() => {
    const onClick = async (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest('a');
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download') || a.hasAttribute('data-no-transition')) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      e.preventDefault();
      if (mode.current !== 'idle') return;
      mode.current = 'push';
      const href = url.pathname + url.search + url.hash;
      router.prefetch(href);
      await leave();
      cleanup();
      router.push(href, { scroll: false });
    };
    const onPop = () => { mode.current = 'pop'; cleanup(); };
    document.addEventListener('click', onClick, true);
    addEventListener('popstate', onPop);
    return () => {
      document.removeEventListener('click', onClick, true);
      removeEventListener('popstate', onPop);
    };
  }, [router]);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const pop = mode.current === 'pop';
    mode.current = 'idle';

    let animId: number;
    const timer = setTimeout(() => {
      animId = requestAnimationFrame(() => {
        enter({ transition: !pop, scrollTop: !pop });
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [pathname]);

  return null;
}

export function usePage(fn: PageFn) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onPage(fn), []);
}
