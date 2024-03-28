export default class HandleTouch {
  constructor({ onTouchEnd } = {}) {
    this.startX = 0;
    this.deltaX = 0;
    this.lastPosition = 0;

    this.onTouchEnd = onTouchEnd;
  }

  handleTouchMove(event) {
    this.lastPosition = event.touches[0].clientX;
  }

  handleTouchStart(event) {
    this.startX = event.touches[0].clientX;
    this.lastPosition = event.touches[0].clientX;
  }

  handleTouchEnd() {
    this.deltaX = this.lastPosition - this.startX;
   
    if(this.onTouchEnd) this.onTouchEnd(this.deltaX);
  }
}