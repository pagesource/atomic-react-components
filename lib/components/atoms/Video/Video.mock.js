export const defaultConfig = {
  width: '100%',
  height: 'auto',
  autoPlay: false,
  controls: true,
  loop: true,
  muted: true,
  poster: '',
  src: 'http://techslides.com/demos/sample-videos/small.mp4',
  className: 'video__container',
  controlsList: 'nodownload',
  trackdata: [
    { src: '/', srcLang: 'de', label: 'German', id: 2, isDefault: false },
    { src: '/', srcLang: 'fr', label: 'Franch', id: 3, isDefault: false },
    { src: '/', srcLang: 'hi', label: 'Hindi', id: 4, isDefault: false },
  ],
};

export const vanillaDefaultConfig = {
  width: '50%',
  height: 'auto',
  autoPlay: false,
  controls: true,
  loop: true,
  muted: true,
  poster: '',
  src: 'http://techslides.com/demos/sample-videos/small.mp4',
  className: 'video__container',
  controlsList: 'nodownload',
  trackdefaultdata: { src: '/', srcLang: 'de', label: 'German', id: 1, isDefault: true },
};
