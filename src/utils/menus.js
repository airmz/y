/*
 * @Author: airmz
 * @Date: 2021-10-12 20:17:32
 * @LastEditTime: 2021-10-18 21:58:38
 * @FilePath: \yeb\src\utils\menus.js
 */
import {
    getRequest
} from "./api";
export const initMenu = (router, store) => {
    if (store.state.routes.length > 0) {
        return;
    }
    getRequest('/system/cfg/menu')
        .then((data) => {
            if (data) {
                let fmtRouter = formatRouter(data);
                router.addRoutes(fmtRouter);
                store.commit('initRouter', fmtRouter)
            }
        })
}
export const formatRouter = (router) => {
    let fmtRoutes = []
    router.forEach(router => {
        let {
            path,
            name,
            children,
            component,
            iconCls
        } = router;
        if (children && children instanceof Array) {
            children = formatRouter(children)
        }
        let fmRouter = {
            path: path,
            name: name,
            children: children,
            iconCls: iconCls,
            component(resovle) {
                if (component.startsWith("Home")) {
                    require(['../views/' + component + '.vue'], resovle);
                  } else if (component.startsWith("Emp")) {
                    require(['../views/emp/' + component + '.vue'], resovle);
                  } else if (component.startsWith("Per")) {
                    require(['../views/per/' + component + '.vue'], resovle);
                  } else if (component.startsWith("Sal")) {
                    require(['../views/sal/' + component + '.vue'], resovle);
                  } else if (component.startsWith("Sta")) {
                    require(['../views/sta/' + component + '.vue'], resovle);
                  } else if (component.startsWith("Sys")) {
                    require(['../views/sys/' + component + '.vue'], resovle);
                  }
            }
        }
        fmtRoutes.push(fmRouter)
    })
    return fmtRoutes;
}