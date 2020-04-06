const useScroll = (elemRef, setterFunc, defaultTop) => {
  if (elemRef.current != null) {
    setterFunc(window.scrollY >= elemRef.current.offsetTop - defaultTop);
  }
};

export default useScroll;
