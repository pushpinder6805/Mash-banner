import { service } from "@ember/service";

export default {
  router: service(),

  setupComponent(args, component) {
    const updateBanner = () => {
      const router = this.router;

      if (!router) {
        this.set("showBanner", false);
        return;
      }

      const route = router.currentRouteName;

      this.set("showBanner",
        route === "discovery.latest" ||
        route === "discovery.categories" ||
        route === "discovery.top"
      );
    };

    updateBanner();

    this.router.on("routeDidChange", updateBanner);
  },
};
