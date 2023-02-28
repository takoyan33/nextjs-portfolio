import { useModal } from "react-hooks-use-modal";

const usePortfolioModal = () => {
  return useModal("__next", {
    preventScroll: true,
  });
};

export default usePortfolioModal;
