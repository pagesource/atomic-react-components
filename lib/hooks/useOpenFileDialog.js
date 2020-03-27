const useOpenFileDialog = () => {
  const openFileDialog = (fileInput) => {
    fileInput.current.click();
  };
  return {
    openFileDialog,
  };
};

export default useOpenFileDialog;
