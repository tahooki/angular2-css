export interface SwiperOption {
  initialSlide?: number;        // Index number of initial slide.
  direction?: string;           // Could be 'horizontal' or 'vertical' (for vertical slider).
  speed?: number;               // Duration of transition between slides (in ms)
  setWrapperSize?: boolean;     // Enabled this option and plugin will set width/height on swiper wrapper equal to total size of all slides. Mostly should be used as compatibility fallback option for browser that don't support flexbox layout well
  virtualTranslate?: boolean;   // Enabled this option and swiper will be operated as usual except it will not move, real translate values on wrapper will not be set. Useful when you may need to create custom slide transition
  width?: number;               // Swiper width (in px). Parameter allows to force Swiper width. Useful only if you initialize Swiper when it is hidden.
  height?: number;              // Swiper height (in px). Parameter allows to force Swiper height. Useful only if you initialize Swiper when it is hidden.
  autoHeight?: boolean;         // Set to true and slider wrapper will adopt its height to the height of the currently active slide
  roundLengths?: boolean;       // Set to true to round values of slides width and height to prevent blurry texts on usual resolution screens (if you have such)
  nested?: boolean;             // Set to true on nested Swiper for correct touch events interception. Use only on nested swipers that use same direction as the parent one

  // Autoplay
  autoplay?: number;                      // Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled
  autoplayStopOnLast?: boolean;           // Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)
  autoplayDisableOnInteraction?: boolean; // Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction

  // Progress
  watchSlidesProgress?: boolean;    // Enable this feature to calculate each slides progress
  watchSlidesVisibility?: boolean;  // watchSlidesProgress should be enabled. Enable this option and slides that are in viewport will have additional visible class

  // freeMode
  freeMode?: boolean;                     // If true then slides will not have fixed positions
  freeModeMomentum?: boolean;             // If true, then slide will keep moving for a while after you release it
  freeModeMomentumRatio?: number;         // Higher value produces larger momentum distance after you release slider
  freeModeMomentumVelocityRatio?: number; // Higher value produces larger momentum velocity after you release slider
  freeModeMomentumBounce?: boolean;       // Set to false if you want to disable momentum bounce in free mode
  freeModeMomentumBounceRatio?: number;   // Higher value produces larger momentum bounce effect
  freeModeMinimumVelocity?: number;       // Minimum touchmove-velocity required to trigger free mode momentum
  freeModeSticky?: boolean;               // Set to true to enable snap to slides positions in free mode

  // Effects
  effect?: string;  // Could be "slide", "fade", "cube", "coverflow" or "flip"
  fade?: { // Fade effect parameters
    crossFade: boolean
  };
  cube?: { // Cube effect parameters. For better performance you may disable shadows
    slideShadows: boolean,
    shadow: boolean,
    shadowOffset: number,
    shadowScale: number
  };
  coverflow?: { // Coverflow effect parameters. For better performance you may disable shadows
    rotate: number,
    stretch: number,
    depth: number,
    modifier: number,
    slideShadows : boolean
  };
  flip?: { // Flip effect parameters. limitRotation (when enabled) limits slides rotation angle to 180deg maximum. It allows to quickly "flip" between different slides. If you use "slow" transitions then it is better to disable it.
    slideShadows : boolean,
    limitRotation: boolean
  };

  // Parallax
  parallax?: boolean; // Enable, if you want to use "parallaxed" elements inside of slider

  // Slides grid
  spaceBetween?: number;            // Distance between slides in px.
  slidesPerView?: number | 'auto';  // Number of slides per view (slides visible at the same time on slider's container).
  slidesPerColumn?: number;         // Number of slides per column, for multirow layout
  slidesPerColumnFill?: string;     // Could be 'column' or 'row'. Defines how slides should fill rows, by column or by row
  slidesPerGroup?: number;          // Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1
  centeredSlides?: number;          // If true, then active slide will be centered, not always on the left side.
  slidesOffsetBefore?: number;      // Add (in px) additional slide offset in the beginning of the container (before all slides)
  slidesOffsetAfter?: number;       // Add (in px) additional slide offset in the end of the container (after all slides)

  // Grab Cursor
  grabCursor?: boolean; // This option may a little improve desktop usability. If true, user will see the "grab" cursor when hover on Swiper

  // Touches
  touchEventsTarget?: string; // Target element to listen touch events on. Can be 'container' (to listen for touch events on swiper-container) or 'wrapper' (to listen for touch events on swiper-wrapper)
  touchRatio?: number;        // Touch ration
  touchAngle?: number;        // Allowable angle (in degrees) to trigger touch move
  simulateTouch?: boolean;    // If true, Swiper will accept mouse events like touch events (click and drag to change slides)
  shortSwipes?: boolean;      // Set to false if you want to disable short swipes
  longSwipes?: boolean;       // Set to false if you want to disable long swipes
  longSwipesRatio?: number;   // Ratio to trigger swipe to next/previous slide during long swipes
  longSwipesMs?: number;      // Minimal duration (in ms) to trigger swipe to next/previous slide during long swipes
  followFinger?: boolean;     // If disabled, then slider will be animated only when you release it, it will not move while you hold your finger on it
  onlyExternal?: boolean;     // If true, then the only way to switch the slide is use of external API functions like slidePrev or slideNext
  threshold?: number;         // Threshold value in px. If "touch distance" will be lower than this value then swiper will not move
  touchMoveStopPropagation?: boolean; // If enabled, then propagation of "touchmove" will be stopped
  iOSEdgeSwipeDetection?: boolean;  // Enable to release Swiper events for swipe-to-go-back work in iOS UIWebView
  iOSEdgeSwipeThreshold?: number;   // Area (in px) from left edge of the screen to release touch events for swipe-to-go-back in iOS UIWebView
  touchReleaseOnEdges?: boolean;    // Enable to release touch events on slider edge position (beginning, end) to allow for further page scrolling
  passiveListeners?: boolean;       // Passive event listeners will be used by default where possible to improve scrolling performance on mobile devices. But if you need to use `e.preventDefault` and you have conflict with it, then you should disable this parameter

  // Touch Resistance
  resistance?: boolean;     // Set to false if you want to disable resistant bounds
  resistanceRatio?: number; // This option allows you to control resistance ratio

  // Clicks
  preventClicks?: boolean;            // Set to true to prevent accidental unwanted clicks on links during swiping
  preventClicksPropagation?: boolean; // Set to true to stop clicks event propagation on links during swiping
  slideToClickedSlide?: boolean;      // Set to true and click on any slide will produce transition to this slide

  // Swiping / No swiping
  allowSwipeToPrev?: boolean;   // Set to false to disable swiping to previous slide direction (to left or top)
  allowSwipeToNext?: boolean;   // Set to false to disable swiping to next slide direction (to right or bottom)
  noSwiping?: boolean;          // Will disable swiping on elements matched to class specified in noSwipingClas
  noSwipingClass?: string;      // If true, then you can add noSwipingClass class to swiper's slide to prevent/disable swiping on this element
  swipeHandler?: string | HTMLElement;  // String with CSS selector or HTML element of the container with pagination that will work as only available handler for swiping

  // Navigation Controls
  uniqueNavElements?: boolean;  // If enabled (by default) and navigation elements' parameters passed as a string (like ".pagination") then Swiper will look for such elements through child elements first. Applies for pagination, prev/next buttons and scrollbar elements

  // Pagination
  pagination?: string | HTMLElement;  // String with CSS selector or HTML element of the container with pagination
  paginationType?: string;            // String with type of pagination. Can be "bullets", "fraction", "progress" or "custom"
  paginationHide?: boolean;           // Toggle (hide/true) pagination container visibility when click on Slider's container
  paginationClickable?: boolean;      // If true then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type
  paginationElement?: string;         // Defines which HTML tag will be use to represent single pagination bullet. . Only for bullets pagination type
  paginationBulletRender?: (swiper, index, className) => string; // This parameter allows totally customize pagination bullets, you need to pass here a function that accepts index number of pagination bullet and required element class name (className). Only for bullets pagination type
  paginationFractionRender?: (swiper, currentClassName, totalClassName) => string; // This parameter allows to customize "fraction" pagination html. Only for fraction pagination type
  paginationProgressRender?: (swiper, progressbarClass) => string; // This parameter allows to customize "progress" pagination. Only for progress pagination type
  paginationCustomRender?: (swiper, current, total) => string; // This parameter is required for custom pagination type where you have to specify how it should be rendered

  // Navigation Buttons
  nextButton?: string | HTMLElement; // String with CSS selector or HTML element of the element that will work like "next" button after click on it
  prevButton?: string | HTMLElement; // String with CSS selector or HTML element of the element that will work like "prev" button after click on it

  // Scollbar
  scrollbar?: string | HTMLElement; // String with CSS selector or HTML element of the container with scrollbar.
  scrollbarHide?: boolean; // Hide scrollbar automatically after user interaction
  scrollbarDraggable?: boolean; // Set to true to enable make scrollbar draggable that allows you to control slider position
  scrollbarSnapOnRelease?: boolean; // Set to true to snap slider position to slides when you release scrollbar

  // Accessibility
  a11y?: boolean; // Option to enable keyboard accessibility to provide foucsable navigation buttons and basic ARIA for screen readers
  prevSlideMessage?: string; // Message for screen readers for previous button
  nextSlideMessage?: string; // Message for screen readers for next button
  firstSlideMessage?: string; // Message for screen readers for previous button when swiper is on first slide
  lastSlideMessage?: string; // Message for screen readers for previous button when swiper is on last slide
  paginationBulletMessage?: string; // Message for screen readers for single pagination bullet

  // Keyboard / Mousewheel
  keyboardControl?: boolean; // Set to true to enable navigation through slides using keyboard right and left (for horizontal mode), top and borrom (for vertical mode) keyboard arrows
  mousewheelControl?: boolean; // Set to true to enable navigation through slides using mouse wheel
  mousewheelForceToAxis?: boolean; // Set to true to force mousewheel swipes to axis. So in horizontal mode mousewheel will work only with horizontal mousewheel scrolling, and only with vertical scrolling in vertical mode.
  mousewheelReleaseOnEdges?: boolean; // Set to true and swiper will release mousewheel event and allow page scrolling when swiper is on edge positions (in the beginning or in the end)
  mousewheelInvert?: boolean; // Set to true to invert sliding direction
  mousewheelSensitivity?: number; // Multiplier of mousewheel data, allows to tweak mouse wheel sensitivity
  mousewheelEventsTarged?: string | HTMLElement; // String with CSS selector or HTML element of the container accepting mousewheel events. By default it is swiper-container

  // Hash/History Navigation
  hashnav?: boolean; // Set to true to enable hash url navigation to for slides
  hashnavWatchState?: boolean; // Set to true to enable also navigation through slides (when hashnav is enabled) by browser history or by setting directly hash on document location
  history?: string; // Enables history push state where every slide will have its own url. In this parameter you have to specify main slides url like "slides" and specify every slide url using data-history attribute.
  replaceState?: boolean; // Works in addition to hashnav or history to replace current url state with the new one instead of adding it to history

  // Images
  preloadImages?: boolean; // When enabled Swiper will force to load all images
  updateOnImagesReady?: boolean; // When enabled Swiper will be reinitialized after all inner images (<img> tags) are loaded. Required preloadImages: true
  lazyLoading?: boolean; // Set to "true" to enable images lazy loading. Note that preloadImages should be disabled
  lazyLoadingInPrevNext?: boolean; // Set to "true" to enable lazy loading for the closest slides images (for previous and next slide images)
  lazyLoadingInPrevNextAmount?: number; // Amount of next/prev slides to preload lazy images in. Can't be less than slidesPerView
  lazyLoadingOnTransitionStart?: boolean; // By default, Swiper will load lazy images after transition to this slide, so you may enable this parameter if you need it to start loading of new image in the beginning of transition

  // Loop
  loop?: boolean; // Set to true to enable continuous loop mode
  loopAdditionalSlides?: number; // Addition number of slides that will be cloned after creating of loop
  loopedSlides?: number; // If you use slidesPerView:'auto' with loop mode you should tell to Swiper how many slides it should loop (duplicate) using this parameter

  // Zoom
  zoom?: boolean; // Set to true to enable zooming functionality
  zoomMax?: number; // Maximum image zoom multiplier
  zoomMin?: number; // minimal image zoom multiplier
  zoomToggle?: boolean; // Enable/disable zoom-in by slide's double tap

  // Controller
  control?: any; // SwiperInstance,  Pass here another Swiper instance or array with Swiper instances that should be controlled by this Swiper
  controlInverse?: boolean; // Set to true and controlling will be in inverse direction
  controlBy?: string; // Can be 'slide' or 'container'. Defines a way how to control another slider: slide by slide (with respect to other slider's grid) or depending on all slides/container (depending on total slider percentage)
  normalizeSlideIndex?: boolean; // Normalize slide index in control mode. See #1766

  // Observer
  observer?: boolean; // Set to true to enable Mutation Observer on Swiper and its elements. In this case Swiper will be updated (reinitialized) each time if you change its style (like hide/show) or modify its child elements (like adding/removing slides)
  observeParents?: boolean; // Set to true if you also need to watch Mutations for Swiper parent elements

  // Breakpoints
  breakpoints?: any; // Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which are not required different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween. Such parameters like slidesPerColumn, loop, direction, effect won't work.

  // Callbacks
  runCallbacksOnInit?: boolean; // Run on[Transition/SlideChange][Start/End] callbacks on swiper initialization. Such callbacks will be fired on initialization in case of your initialSlide is not 0, or you use loop mode
  onInit?: (swiper) => void; // Callback function, will be executed right after Swiper initialization
  onSlideChangeStart?: (swiper) => void; // Callback function, will be executed in the beginning of animation to other slide (next or previous). Receives swiper instance as an argument.
  onSlideChangeEnd?: (swiper) => void; // Callback function, will be executed after animation to other slide (next or previous). Receives slider instance as an argument.
  onSlideNextStart?: (swiper) => void; // Same as "onSlideChangeStart" but for "forward" direction only
  onSlideNextEnd?: (swiper) => void; // 	Same as "onSlideChangeEnd" but for "forward" direction only
  onSlidePrevStart?: (swiper) => void; // Same as "onSlideChangeStart" but for "backward" direction only
  onSlidePrevEnd?: (swiper) => void; // Same as "onSlideChangeEnd" but for "backward" direction only
  onTransitionStart?: (swiper) => void; // Callback function, will be executed in the beginning of transition. Receives swiper instance as an argument.
  onTransitionEnd?: (swiper) => void; // 	Callback function, will be executed after transition. Receives slider instance as an argument.
  onTouchStart?: (swiper, event) => void; // Callback function, will be executed when user touch Swiper. Receives swiper instance and 'touchstart' event as an arguments.
  onTouchMove?: (swiper, event) => void; // Callback function, will be executed when user touch and move finger over Swiper. Receives swiper instance and 'touchmove' event as an arguments.
  onTouchMoveOpposite?: (swiper, event) => void; // Callback function, will be executed when user touch and move finger over Swiper in direction opposite to direction parameter. Receives swiper instance and 'touchmove' event as an arguments.
  onSliderMove?: (swiper, event) => void; // 	Callback function, will be executed when user touch and move finger over Swiper and move it. Receives swiper instance and 'touchmove' event as an arguments.
  onTouchEnd?: (swiper, event) => void; // 	Callback function, will be executed when user release Swiper. Receives swiper instance and 'touchend' event as an arguments.
  onClick?: (swiper, event) => void; // Callback function, will be executed when user click/tap on Swiper after 300ms delay. Receives swiper instance and 'touchend' event as an arguments.
  onTap?: (swiper, event) => void; // Callback function, will be executed when user click/tap on Swiper. Receives swiper instance and 'touchend' event as an arguments.
  onDoubleTap?: (swiper, event) => void; // Callback function, will be executed when user double tap on Swiper's container. Receives swiper instance and 'touchend' event as an arguments
  onImageReady?: (swiper) => void; // Callback function, will be executed right after all inner images are loaded. updateOnImagesReady should be also enabled
  onProgress?: (swiper, progress) => void; // Callback function, will be executed when Swiper progress is changed, as second arguments it receives progress that is always from 0 to 1
  onReachBeginning?: (swiper) => void; // Callback function, will be executed when Swiper reach its beginning (initial position)
  onReachEnd?: (swiper) => void; // Callback function, will be executed when Swiper reach last slide
  onDestroy?: (swiper) => void; // Callback function, will be executed when you destroy Swiper
  onSetTranslate?: (swiper, translate) => void; // Callback function, will be executed when swiper's wrapper change its position. Receives swiper instance and current translate value as an arguments
  onSetTransition?: (swiper, transition) => void; // Callback function, will be executed everytime when swiper starts animation. Receives swiper instance and current transition duration (in ms) as an arguments
  onAutoplay?: (swiper) => void; // 	Same as onSlideChangeStart but caused by autoplay
  onAutoplayStart?: (swiper) => void; // 	Callback function, will be executed when when autoplay started
  onAutoplayStop?: (swiper) => void; // Callback function, will be executed when when autoplay stopped
  onLazyImageLoad?: (swiper, slide, image) => void; // Callback function, will be executed in the beginning of lazy loading of image
  onLazyImageReady?: (swiper, slide, image) => void; // 	Callback function, will be executed when lazy loading image will be loaded
  onPaginationRendered?: (swiper, paginationContainer) => void; // Callback function, will be executed after pagination elements generated and added to DOM
  onScroll?: (swiper, e) => void; // 	Callback function, will be executed when slider sliding or scrolling happens with mousehweel control
  onBeforeResize?: (swiper) => void; // Callback function, will be executed on window resize right before swiper's onresize manipulation
  onAfterResize?: (swiper) => void; // Callback function, will be executed on window resize right after swiper's onresize manipulation
  onKeyPress?: (swiper, kc) => void; // 	Callback function, will be executed on "keydown" event when keyboard control is enabled

  // Namespace
  containerModifierClass?: string; // The beginning of the modifier CSS class that can be added to swiper container depending on different parameters
  slideClass?: string; // CSS class name of slide
  slideActiveClass?: string; // CSS class name of currently active slide
  slideDuplicatedActiveClass?: string; // CSS class name of duplicated slide which represents the currently active slide
  slideVisibleClass?: string; // CSS class name of currently visible slide
  slideDuplicateClass?: string; // CSS class name of slide duplicated by loop mode
  slideNextClass?: string; // CSS class name of slide which is right after currently active slide
  slideDuplicatedNextClass?: string; // CSS class name of duplicated slide which represents the slide next to active slide
  slidePrevClass?: string; // CSS class name of slide which is right before currently active slide
  slideDuplicatedPrevClass?: string; // CSS class name of duplicated slide which represents the slide previous to active slide
  wrapperClass?: string; // CSS class name of slides' wrapper
  bulletClass?: string; // CSS class name of single pagination bullet
  bulletActiveClass?: string; // CSS class name of currently active pagination bullet
  paginationHiddenClass?: string; // CSS class name of pagination when it becomes inactive
  paginationCurrentClass?: string; // CSS class name of the element with currently active index in "fraction" pagination
  paginationTotalClass?: string; // 	CSS class name of the element with total number of "snaps" in "fraction" pagination
  paginationProgressbarClass?: string; // CSS class name of pagination progressbar
  paginationClickableClass?: string; // CSS class name set to pagination when it is clickable
  paginationModifierClass?: string; // The beginning of the modifier CSS class name that will be added to pagination depending on parameters
  buttonDisabledClass?: string; // CSS class name of next/prev button when it becomes disabled
  lazyLoadingClass?: string; // 	CSS class name of lazy element
  lazyStatusLoadingClass?: string; // CSS class name of lazy loading element
  lazyStatusLoadedClass?: string; // 	CSS class name of lazy loaded element
  lazyPreloaderClass?: string; // CSS class name of lazy preloader
  preloaderClass?: string; // CSS class name of additional lazy preloader
  zoomContainerClass?: string; // CSS class name of zoom container
  notificationClass?: string; // CSS class name of a11 notification
}
