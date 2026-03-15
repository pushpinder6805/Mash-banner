import { service } from "@ember/service";

export default {
  setupComponent(args, component) {
    const router = this.container.lookup("service:router");

    const updateBannerVisibility = () => {
      const currentRoute = router.currentRouteName;
      const isHomepage = currentRoute === "discovery.latest" ||
                         currentRoute === "discovery.categories" ||
                         currentRoute === "discovery.top";
      component.set("showBanner", isHomepage);
    };

    updateBannerVisibility();

    component.set("_routeHandler", updateBannerVisibility);
    router.on("routeDidChange", updateBannerVisibility);
  },

  teardownComponent(args, component) {
    const router = this.container.lookup("service:router");
    const handler = component.get("_routeHandler");
    if (router && handler) {
      router.off("routeDidChange", handler);
    }
  }
};
