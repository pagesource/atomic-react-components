const defaultConfig = {
  width: '100%',
  height: 'auto',
  autoPlay: true,
  controls: true,
  loop: true,
  muted: true,
  poster: '',
  src: 'http://techslides.com/demos/sample-videos/small.mp4',
  type: 'video/mp4',
  children: <track src="/" default kind="subtitles" srcLang="en" label="English" />,
  className: 'videoContainer',
};

export default defaultConfig;
