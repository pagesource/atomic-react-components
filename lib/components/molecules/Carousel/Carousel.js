// @flow
/**
 * Carousel
 */
import React, { useContext, useState, useRef, useEffect } from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import stylesCarousel from './Carousel.style';
import type {
  CarousalContextType,
  CarouselProps,
  AnimationProps,
  SlideWrapperProps,
  SlideProps,
  NavControllerProps,
} from './types';
import List from '../List';
import Button from '../../atoms/Button';
import useInterval from '../../../hooks/SetInterval/useSetInterval.hook';

const CarouselContext = React.createContext<CarousalContextType>({});

/**
 * Rendering carousel dots
 *
 * @return HTML
 *   Wrapper with UL | OL
 */
const GetList = () => {
  const { activeSlideIndex, setActiveSlideIndex, config, totalSlidesCount } = useContext(
    CarouselContext
  );
  const { dotsStyle, renderSlideThumb } = config;
  const allSlides = [];
  for (let id = 0; id < totalSlidesCount; id += 1) {
    allSlides.push(
      <li key={id} className={classnames('item', { active: id === activeSlideIndex })}>
        <Button
          {...dotsStyle}
          onClick={() => setActiveSlideIndex(id)}
          className={classnames('icon', { thumbnail: renderSlideThumb })}
        >
          {(renderSlideThumb && renderSlideThumb[id]) || id + 1}
        </Button>
      </li>
    );
  }

  return allSlides;
};

/**
 * ListWrapper for dots.
 */
const ListWrapper = () => {
  return (
    <div className="carousel-dots">
      <List>
        <GetList />
      </List>
    </div>
  );
};

/**
 * Provides HTML for navigation button.
 *
 * @param {Object} navType
 *   type of navigation controller.
 */
const NavController = ({ navType, children, prevLabel, nextLabel }: NavControllerProps): Node => {
  const { setActiveSlideIndex, activeSlideIndex, totalSlidesCount, config } = useContext(
    CarouselContext
  );
  const { navBtnStyle } = config;

  const handleNavController = (type) => {
    setActiveSlideIndex(type === 'next' ? activeSlideIndex + 1 : activeSlideIndex - 1);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') {
      handleNavController('next');
    } else if (e.key === 'ArrowLeft') {
      handleNavController('prev');
    }

    return null;
  };

  return (
    <div className={classnames('nav-action', navType)}>
      <Button
        {...navBtnStyle}
        onClick={() => handleNavController(navType)}
        onKeyUp={handleKeyPress}
        disabled={
          navType === 'next' ? activeSlideIndex === totalSlidesCount - 1 : activeSlideIndex === 0
        }
      >
        {children || (navType === 'next' ? nextLabel : prevLabel)}
      </Button>
    </div>
  );
};

/**
 * Carousel Controls.
 */
const CarouselControls = ({ ...props }) => {
  return (
    <div className="carousel-controls">
      <NavController navType="next" {...props} />
      <NavController navType="prev" {...props} />
      <AnimationControl {...props} />
    </div>
  );
};

/**
 * Play and Pause icon to handle slide animation.
 */
const AnimationControl = ({ className, renderPlay, renderPause }: AnimationProps): Node => {
  const { setAnimationRunning, isAnimationRunning } = useContext(CarouselContext);

  const handleAnimation = () => {
    setAnimationRunning(!isAnimationRunning);
  };

  return (
    <div className={classnames('animation-panel', className)}>
      <Button onClick={handleAnimation}>{isAnimationRunning ? renderPause() : renderPlay()}</Button>
    </div>
  );
};

/**
 * Carousel Main Element.
 *
 * @param {Element} children
 *   Wraps all tha carousel elements.
 *
 * @return Carousel.
 */
const Carousel = ({
  children,
  className,
  controls,
  autoplay,
  dots,
  dotsStyle,
  navBtnStyle,
  legacy,
  centerMode,
  slideTransitionTime,
  slideAnimationTime,
  renderSlideThumb,
  itemsPerSlide,
  responsive,
  ...others
}: CarouselProps): Node => {
  const [config, setConfig] = useState({
    controls,
    autoplay,
    dots,
    dotsStyle,
    navBtnStyle,
    slideTransitionTime,
    slideAnimationTime,
    renderSlideThumb,
    itemsPerSlide,
  });
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isAnimationRunning, setAnimationRunning] = useState(config.autoplay);
  const [totalSlidesCount, setTotalSlidesCount] = useState();

  const getResponsiveConfiguration = (responsiveConf) => {
    const sortedResponsiveConfig = responsiveConf.sort(
      (prev, next) => prev.breakpoint - next.breakpoint
    );

    const responsiveConfig = sortedResponsiveConfig.filter(
      (item) => item.breakpoint < window.innerWidth
    );

    /**
     * If no settings found for required screen then
     * settings for first breakpoint will be taken into consideration.
     */
    if (responsiveConfig.length === 0) return sortedResponsiveConfig[0];

    return responsiveConfig.reduce((initialConfig, currentConfig) =>
      initialConfig.breakpoint > currentConfig.breakpoint ? initialConfig : currentConfig
    );
  };

  const getOverwrittenConfig = (defaultConfig, responsiveConfig) => {
    const amendConfig = { ...defaultConfig };
    Object.keys(responsiveConfig.settings).forEach((item) => {
      amendConfig[item] = responsiveConfig.settings[item];
    });

    return amendConfig;
  };

  useEffect(() => {
    if (responsive.length !== 0) {
      const responsiveConfig = getResponsiveConfiguration(responsive);
      if (responsiveConfig !== undefined) {
        setConfig(getOverwrittenConfig(config, responsiveConfig));
      }
    }
  }, []);

  useInterval(
    () => {
      if (totalSlidesCount) {
        const currentIndex = activeSlideIndex !== totalSlidesCount - 1 ? activeSlideIndex : -1;
        setActiveSlideIndex(currentIndex + 1);
      }
    },
    isAnimationRunning ? slideTransitionTime : null
  );

  const carouselState = {
    config,
    activeSlideIndex,
    setActiveSlideIndex,
    isAnimationRunning,
    setAnimationRunning,
    totalSlidesCount,
    setTotalSlidesCount,
  };

  return (
    <section
      {...others}
      className={classnames(
        'carousel-wrapper',
        { 'center-mode': centerMode },
        { legacy },
        className
      )}
    >
      <CarouselContext.Provider value={carouselState}>
        {children}
        {config.dots && <ListWrapper />}
        {config.controls && <CarouselControls />}
      </CarouselContext.Provider>
    </section>
  );
};

/**
 * Slide Wrapper.
 *
 * @param {Array} children
 *   Wraps all the slides.
 *
 * @return All slides in single wrapper.
 */
Carousel.SlideWrapper = ({ children, className }: SlideWrapperProps): Node => {
  const slidingWrapperRef = useRef();
  const {
    config,
    activeSlideIndex,
    isAnimationRunning,
    setAnimationRunning,
    setTotalSlidesCount,
  } = useContext(CarouselContext);
  const { itemsPerSlide } = config;
  let currentAnimationStatus = true;

  const handleMouseEnter = () => {
    if (isAnimationRunning) {
      currentAnimationStatus = true;
      setAnimationRunning(!currentAnimationStatus);
    } else {
      currentAnimationStatus = false;
    }
  };

  const handleMouseLeave = () => {
    if (currentAnimationStatus) {
      currentAnimationStatus = false;
      setAnimationRunning(!currentAnimationStatus);
    }

    return null;
  };

  useEffect(() => {
    setTotalSlidesCount(Math.ceil(children.length / itemsPerSlide));
  }, [itemsPerSlide]);

  useEffect(() => {
    if (slidingWrapperRef.current) {
      slidingWrapperRef.current.style.transform = `translateX(-${activeSlideIndex * 100}%)`;
    }
  }, [activeSlideIndex]);

  return (
    <div
      className={classnames('carousel-section', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={classnames('carousel-sliding-wrapper', className)} ref={slidingWrapperRef}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            id: index,
          });
        })}
      </div>
    </div>
  );
};

/**
 * Slide Container.
 *
 * @param {Element} children
 *   Will wraps the slide content.
 *
 * @return Single slide with wrapper.
 */
Carousel.Slide = ({ children, id, className }: SlideProps): Node => {
  const { activeSlideIndex, config } = useContext(CarouselContext);
  const { itemsPerSlide } = config;
  const slideRef = useRef();

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.flexBasis = `${100 / itemsPerSlide}%`;
    }
  }, [itemsPerSlide]);

  return (
    <div
      className={classnames('slide', { active: id === activeSlideIndex }, className)}
      ref={slideRef}
    >
      {children}
    </div>
  );
};

/**
 * Dots Navigation.
 *
 * @param {Element} children
 *   Will wraps the slide content.
 *
 * @return Single slide with wrapper.
 */
Carousel.Dots = ({ ...props }): Node => {
  return <ListWrapper {...props} />;
};

/**
 * Next Navigation.
 */
Carousel.Next = ({ children }: NavControllerProps) => (
  <NavController navType="next">{children}</NavController>
);

/**
 * Previous Navigation.
 */
Carousel.Prev = ({ children }: NavControllerProps) => (
  <NavController navType="prev">{children}</NavController>
);

/**
 * Animation Play/Pause Button.
 */
Carousel.AnimationController = ({ ...props }) => <AnimationControl {...props} />;

/**
 * Carousel Controls
 */
Carousel.Controls = ({ ...props }) => <CarouselControls {...props} />;

NavController.defaultProps = {
  nextLabel: 'next',
  prevLabel: 'prev',
};

AnimationControl.defaultProps = {
  renderPlay: () => 'play',
  renderPause: () => 'pause',
};

Carousel.defaultProps = {
  controls: false,
  autoplay: false,
  dots: true,
  slideTransitionTime: 2000,
  slideAnimationTime: 3000,
  itemsPerSlide: 1,
  responsive: [],
};

Carousel.Slide.displayName = 'Slide';
Carousel.Dots.displayName = 'Dots';

const StyledCarousal: ComponentType<CarouselProps> = styled(Carousel)`
  ${stylesCarousel};
`;

export default StyledCarousal;

export { Carousel as CarouselVanilla };
