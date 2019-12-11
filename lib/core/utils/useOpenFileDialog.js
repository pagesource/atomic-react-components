export const useOpenFileDialog = () => {
    const openFileDialog = fileInput => {
        fileInput.current.click();
    };
    return {
        FileInputField: {
            openFileDialog
        },
    };
};