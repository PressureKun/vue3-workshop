import Home from "./views/Home.vue";
import Examples from "./views/Examples.vue";
import NotFound from "./views/NotFound.vue";

import Example_1 from "./views/examples/Example_1.vue";
import Example_2 from "./views/examples/Example_2.vue";
import Example_3 from "./views/examples/Example_3.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/examples",
    component: Examples,
    meta: { title: "Examples" },
    children: [
      {
        path: "example_1",
        component: Example_1,
      },
      {
        path: "example_2",
        component: Example_2,
      },
      {
        path: "example_3",
        component: Example_3,
      },
    ],
  },
  { path: "/:path(.*)", component: NotFound },
];
