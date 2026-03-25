'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

export type MenuTab = 'lunch-dinner' | 'brunch' | 'desserts' | 'cocktails' | 'wine-list';

interface Tab {
  id: MenuTab;
  label: string;
}

interface MenuTabsProps {
  tabs: Tab[];
  children: (activeTab: MenuTab) => React.ReactNode;
}

export default function MenuTabs({ tabs, children }: MenuTabsProps) {
  const [activeTab, setActiveTab] = useState<MenuTab>('lunch-dinner');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const navRef = useRef<HTMLDivElement>(null);

  const updateIndicator = useCallback(() => {
    const activeEl = tabRefs.current.get(activeTab);
    if (activeEl && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - navRect.left + navRef.current.scrollLeft,
        width: elRect.width,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  // Scroll active tab into view on mobile
  useEffect(() => {
    const activeEl = tabRefs.current.get(activeTab);
    if (activeEl && navRef.current) {
      const nav = navRef.current;
      const elRect = activeEl.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      if (elRect.left < navRect.left || elRect.right > navRect.right) {
        activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeTab]);

  return (
    <>
      {/* Sticky Tab Navigation */}
      <div className="sticky top-[72px] z-30 bg-navy-dark/95 backdrop-blur-md border-b border-cream/[0.06]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div
            ref={navRef}
            className="relative flex gap-1 overflow-x-auto scrollbar-hide py-1 sm:justify-center"
            role="tablist"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => {
                  if (el) tabRefs.current.set(tab.id, el);
                }}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative whitespace-nowrap px-4 py-3 font-heading text-sm tracking-[0.1em] transition-colors duration-300 sm:px-6 sm:text-base ${
                  activeTab === tab.id
                    ? 'text-copper'
                    : 'text-cream/50 hover:text-cream/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
            {/* Animated underline indicator */}
            <span
              className="absolute bottom-0 h-[2px] bg-copper transition-all duration-300 ease-out"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {children(activeTab)}
      </div>
    </>
  );
}
