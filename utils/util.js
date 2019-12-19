const useHandleScroll = (elemRef, setterFunc) => {
  if (elemRef.current != null) {
    setterFunc(window.scrollY >= elemRef.current.offsetTop);
  }
};

export default useHandleScroll;
