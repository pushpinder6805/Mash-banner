import { service } from "@ember/service";

export default {
  setupComponent(args, component) {
    const router = this.router || component.router;
    const route = router.currentRouteName;

    component.set("showBanner",
      route === "discovery.latest" ||
      route === "discovery.categories" ||
      route === "discovery.top"
    );
  },

  router: service(),
};
