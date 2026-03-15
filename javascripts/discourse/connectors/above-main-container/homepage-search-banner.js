import { inject as service } from "@ember/service";

export default {
  setupComponent(args, component) {
    this.router = service("router");

    const updateBannerVisibility = () => {
      const currentRoute = this.router.currentRouteName;
      const isHomepage = currentRoute === "discovery.latest" ||
                         currentRoute === "discovery.categories" ||
                         currentRoute === "discovery.top";
      component.set("showBanner", isHomepage);
    };

    updateBannerVisibility();

    this.router.on("routeDidChange", updateBannerVisibility);
  },

  teardownComponent() {
    if (this.router) {
      this.router.off("routeDidChange");
    }
  }
};
