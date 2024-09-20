export interface AutoplayOptions {
    delay?: number; // Delay between transitions in milliseconds
    jump?: boolean; // Instant slide transitions when advancing
    playOnInit?: boolean; // Start autoplay on init
    stopOnInteraction?: boolean; // Stop autoplay after drag interactions
    stopOnMouseEnter?: boolean; // Stop autoplay on mouse enter
    stopOnFocusIn?: boolean; // Stop autoplay when focus is received
    stopOnLastSnap?: boolean; // Stop autoplay on the last slide
    rootNode?: (emblaRoot: HTMLElement) => HTMLElement | null; // Custom root node for interaction
}