'use client'
import { useModal } from 'react-hooks-use-modal'

const usePortfolioModal = () => {
  return useModal('__next', {
    preventScroll: true,
    focusTrapOptions: {
      clickOutsideDeactivates: false,
    },
  })
}

export default usePortfolioModal
