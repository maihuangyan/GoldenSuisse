import Scrollbar from './smooth-scrollbar.js'

export default ({ app }) => {
  class EdgeEasingPlugin extends Scrollbar.ScrollbarPlugin {
    static pluginName = "edgeEasing";
    _remainMomentum = {
      x: 0,
      y: 0
    };
    transformDelta(delta) {
      const { limit, offset } = this.scrollbar;
      const x = this._remainMomentum.x + delta.x;
      const y = this._remainMomentum.y + delta.y;
      this.scrollbar.setMomentum(
        Math.max(-offset.x, Math.min(x, limit.x - offset.x)),
        Math.max(-offset.y, Math.min(y, limit.y - offset.y))
      );
      return { x: 0, y: 0 };
    }
    onRender(remainMomentum) {
      Object.assign(this._remainMomentum, remainMomentum);
    }
  }
  Scrollbar.use(EdgeEasingPlugin);
  window.Scrollbar = Scrollbar;
};
