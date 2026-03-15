import { getOwner } from "@ember/application";

export default {
  shouldRender(args, component) {
    const router = getOwner(component).lookup("service:router");
    const currentRoute = router.currentRouteName;
    return currentRoute === "discovery.latest" ||
           currentRoute === "discovery.categories" ||
           currentRoute === "discovery.top";
  }
};
