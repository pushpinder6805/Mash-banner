import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "homepage-banner-route",

  initialize() {
    withPluginApi("0.8.7", api => {

      api.modifyClass(
        "component:above-main-container",
        {
          pluginId: "homepage-search-banner",

          get showBanner() {
            const router = api.container.lookup("service:router");
            const route = router.currentRouteName;

            return route === "discovery.latest" ||
                   route === "discovery.categories" ||
                   route === "discovery.top";
          }
        }
      );

    });
  }
};
