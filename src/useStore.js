import create from 'zustand'

export const useMouseStore = create(set => ({
  mouse: {
    x: 0,
    y: 0
  },
  updateMousePosition: (x, y) => set(() => ({mouse:{x,y}})),
}));

export const useHeroStore = create(set => ({
  isActive: false,
  setIsActive: (value) => set(() => ({isActive: value}))
}));

export const useProjectStore = create(set => ({
  isActive: false,
  setIsActive: (value) => set(() => ({isActive: value}))
}));


export const useImageBlogStore = create(set => ({
  activeIndex: -1,
  setActiveIndex: (value) => set(() => ({activeIndex: value}))
}));

