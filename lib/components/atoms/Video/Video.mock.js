const defaultConfig = {
  width: '100%',
  height: 'auto',
  autoPlay: true,
  controls: true,
  loop: true,
  muted: true,
  poster: '',
  src: 'http://techslides.com/demos/sample-videos/small.mp4',
  className: 'videoContainer',
  controlsList: 'nodownload',
  trackdata: [
    { src: '/', srcLang: 'en', label: 'English', id: 1, isDefault: true },
    { src: '/', srcLang: 'de', label: 'German', id: 2, isDefault: false },
    { src: '/', srcLang: 'fr', label: 'Franch', id: 3, isDefault: false },
    { src: '/', srcLang: 'hi', label: 'Hindi', id: 4, isDefault: false },
  ],
};
export default defaultConfig;
