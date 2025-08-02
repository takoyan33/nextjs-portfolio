import { create } from 'zustand'

/**
 * タブの状態を管理するストア
 */
export interface TabState {
  /** タブが開いているかどうか */
  activeTab: 'history' | 'career'
  /** タブを開く */
  changeActiveTab: (tab: 'history' | 'career') => void
}

/**
 * タブ状態管理ストア
 */
export const useTabStore = create<TabState>((set) => ({
  activeTab: 'history',

  changeActiveTab: (tab: 'history' | 'career') =>
    set({
      activeTab: tab,
    }),
}))
