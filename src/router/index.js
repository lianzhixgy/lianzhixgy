import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import vue3dmodel from "@/views/vue3dmodel";
import Audio from "../views/Audio"
import VueThreeJs from "@/views/VueThreeJs";
import ZhangApp from "@/views/ZhangApp";
import test from "@/views/test";
import EleStyle from "@/views/EleStyle";
import ZhangAppTwo from "@/views/ZhangAppTwo";
import test01 from "@/views/test01";
import AutoCanvas from "@/views/AutoCanvas";
import testarr from "@/views/testarr";
import MotorSpeed from "@/views/MotorSpeed";
import SpeedEffectiveValue from "@/views/SpeedEffectiveValue";
import ThreeJSTest from "@/views/ThreeJSTest";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vue3d',
    name: 'vue3d',
    component: vue3dmodel
  },
  {
    path: '/audio',
    name: 'audio',
    component: Audio
  },
  {
    path: '/vuethreejs',
    name: 'vuethreejs',
    component: VueThreeJs
  },
  {
    path: '/zhangapp',
    name: 'zhangapp',
    component: ZhangApp
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/elestyle',
    name: 'elestyle',
    component: EleStyle
  },
  {
    path: '/zhangapptwo',
    name: 'zhangapptwo',
    component: ZhangAppTwo
  },
  {
    path: '/test01',
    name: 'test01',
    component: test01
  },
  {
    path: '/autocanvas',
    name: 'autocanvas',
    component: AutoCanvas
  },
  {
    path: '/testarr',
    name: 'testarr',
    component: testarr
  },
  {
    path: '/motorspeed',
    name: 'motorspeed',
    component: MotorSpeed
  },
  {
    path: '/speedeffectivevalue',
    name: 'speedeffectivevalue',
    component: SpeedEffectiveValue
  },
  {
    path: '/threejstest',
    name: 'threejstest',
    component: ThreeJSTest
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
