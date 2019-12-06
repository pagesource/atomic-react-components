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
  trackdata: [
    { src: '/', srcLang: 'en', label: 'English', id: 1 },
    { src: '/', srcLang: 'de', label: 'German', id: 2 },
    { src: '/', srcLang: 'fr', label: 'Franch', id: 3 },
    { src: '/', srcLang: 'hi', label: 'Hindi', id: 4 },
  ],
};
export default defaultConfig;
