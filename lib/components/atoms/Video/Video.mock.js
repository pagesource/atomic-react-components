const defaultConfig = {
  width: '100%',
  height: 'auto',
  autoPlay: true,
  controls: true,
  loop: true,
  muted: true,
  poster: '',
  src: 'http://techslides.com/demos/sample-videos/small.mp4',
  // type: 'video/mp4',
  className: 'videoContainer',
  controlsList: 'nodownload',
  trackData: [
    { src: '/', srcLang: 'en', label: 'English' },
    { src: '/', srcLang: 'de', label: 'German' },
    { src: '/', srcLang: 'fr', label: 'Franch' },
    { src: '/', srcLang: 'hi', label: 'Hindi' },
  ],
};
export default defaultConfig;
