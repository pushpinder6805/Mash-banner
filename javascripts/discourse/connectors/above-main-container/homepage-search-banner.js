import { service } from "@ember/service";

export default {
  router: service(),

  setupComponent(args, component) {
    this.set("showBanner", this.shouldShowBanner());
  },

  shouldShowBanner() {
    const route = this.router.currentRouteName;
    return (
      route === "discovery.latest" ||
      route === "discovery.categories" ||
      route === "discovery.top"
    );
  },
};
