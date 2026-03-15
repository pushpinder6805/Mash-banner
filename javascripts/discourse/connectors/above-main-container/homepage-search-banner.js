import { service } from "@ember/service";

export default {
  router: service(),

  setupComponent(args, component) {
    const router = this.router;

    if (!router) {
      component.set("showBanner", false);
      return;
    }

    const route = router.currentRouteName;

    component.set("showBanner",
      route === "discovery.latest" ||
      route === "discovery.categories" ||
      route === "discovery.top"
    );
  },
};
