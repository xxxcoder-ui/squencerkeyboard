webpackJsonp([3],
             {0:function(n,t,e){e("j1ja"),
               n.exports=e("NHnr")},
              "9ymj":function(n,t){},
              IcnI:function(n,t,e)
              {"use strict";var a=e("7+uW"),
                r=e("NYxO"),u=e("K430");a.a.use(r.a);var o=new r.a.Store({modules:{AutoPianoModule:u.a}});t.a=o},K430:function(n,t,e)
              {"use strict";var a=e("bOdI"),r=e.n(a),u={wallpaper:"/static/images/bg_default.jpg"},
                o=r()({},"SET_WALLPAPER",
                      function(n,t){n.wallpaper=t}),
                i={$setWallpaper:function(n,t)
                {var e=n.commit;t&&e("SET_WALLPAPER",t)}},
                c={$currentWallpaper:function(n){return n.wallpaper}};t.a={state:u,mutations:o,actions:i,getters:c}},
              M93x:function(n,t,e){"use strict";function a(n){e("9ymj")}var r=e("xJD8"),
                u=e("aQK7"),o=e("VU/8"),i=a,c=o(r.a,u.a,!1,i,null,null);t.a=c.exports},
              NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("7+uW"),
                r=e("M93x"),u=e("IcnI"),o=e("YaEn");a.a.config.productionTip=!1,new a.a({router:o.a,store:u.a,render:function(n){return n(r.a)}})
                .$mount("#app",!0)},YaEn:function(n,t,e)
              {"use strict";var a=e("7+uW"),r=e("/ocq");a.a.use(r.a),t.a=new r.a({mode:"hash",routes:[{path:"/",name:"AutoPianoPC",component:function(){return e.e(0).then(e.bind(null,"dUU9"))}},
                                                                                                      {path:"/links",name:"FriendLinks",component:function(){return e.e(1).then(e.bind(null,"itpV"))}}]})},aQK7:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},
                                                                                                                                                                                                                                                                                                                     [e("keep-alive",[e("router-view")],1)],1)},r=[],u={render:a,staticRenderFns:r};t.a=u},
              xJD8:function(n,t,e)
              {"use strict";t.a={name:"App",data:function(){return{}},created:function(){},
                                 mounted:function(){},methods:{}}}},[0]);
