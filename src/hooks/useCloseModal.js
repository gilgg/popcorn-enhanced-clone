import { useEffect } from "react";

const useCloseModal = (ref, setToggleModal) => {
  useEffect(() => {
    let handler = (e) => {
      if (!ref.current.contains(e.target)) {
        setToggleModal(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
}

export default useCloseModal;