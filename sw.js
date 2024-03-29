const version = 2.1;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').then(function (registration) {
            console.log('Service worker successfully registered on scope', registration.scope);
            console.log('Version', version);
        }).catch(function (error) {
            console.log('Service worker failed to register');
            console.log('Version', version);
            window.location.pathname;
        });
    });
}

var cacheName = 'flagbreaker';
var filesToCache = [
  'index.html',
  'public/main.css',
  'public/main.js',
  'logo-no-background.png',
  'Flagbreakerlogo.png',
  //all flag images
  'flag_images/ae.png',
  'flag_images/af.png',
  'flag_images/ag.png',
  'flag_images/ai.png',
  'flag_images/al.png',
  'flag_images/am.png',
  'flag_images/ao.png',
  'flag_images/aq.png',
  'flag_images/ar.png',
  'flag_images/as.png',
  'flag_images/at.png',
  'flag_images/au.png',
  'flag_images/aw.png',
  'flag_images/ax.png',
  'flag_images/az.png',
  'flag_images/ba.png',
  'flag_images/bb.png',
  'flag_images/bd.png',
  'flag_images/be.png',
  'flag_images/bf.png',
  'flag_images/bg.png',
  'flag_images/bh.png',
  'flag_images/bi.png',
  'flag_images/bj.png',
  'flag_images/bl.png',
  'flag_images/bm.png',
  'flag_images/bn.png',
  'flag_images/bo.png',
  'flag_images/bq.png',
  'flag_images/br.png',
  'flag_images/bs.png',
  'flag_images/bt.png',
  'flag_images/bv.png',
  'flag_images/bw.png',
  'flag_images/by.png',
  'flag_images/bz.png',
  'flag_images/ca.png',
  'flag_images/cc.png',
  'flag_images/cd.png',
  'flag_images/cf.png',
  'flag_images/cg.png',
  'flag_images/ch.png',
  'flag_images/ci.png',
  'flag_images/ck.png',
  'flag_images/cl.png',
  'flag_images/cm.png',
  'flag_images/cn.png',
  'flag_images/co.png',
  'flag_images/cr.png',
  'flag_images/cu.png',
  'flag_images/cv.png',
  'flag_images/cw.png',
  'flag_images/cx.png',
  'flag_images/cy.png',
  'flag_images/cz.png',
  'flag_images/de.png',
  'flag_images/dj.png',
  'flag_images/dk.png',
  'flag_images/dm.png',
  'flag_images/do.png',
  'flag_images/dz.png',
  'flag_images/ec.png',
  'flag_images/ee.png',
  'flag_images/eg.png',
  'flag_images/eh.png',
  'flag_images/er.png',
  'flag_images/es.png',
  'flag_images/et.png',
  'flag_images/eu.png',
  'flag_images/fi.png',
  'flag_images/fj.png',
  'flag_images/fk.png',
  'flag_images/fm.png',
  'flag_images/fo.png',
  'flag_images/fr.png',
  'flag_images/ga.png',
  'flag_images/gb-eng.png',
  'flag_images/gb-nir.png',
  'flag_images/gb-sct.png',
  'flag_images/gb-wls.png',
  'flag_images/gb.png',
  'flag_images/gd.png',
  'flag_images/ge.png',
  'flag_images/gf.png',
  'flag_images/gg.png',
  'flag_images/gh.png',
  'flag_images/gi.png',
  'flag_images/gl.png',
  'flag_images/gm.png',
  'flag_images/gn.png',
  'flag_images/gp.png',
  'flag_images/gq.png',
  'flag_images/gr.png',
  'flag_images/gt.png',
  'flag_images/gu.png',
  'flag_images/gw.png',
  'flag_images/gy.png',
  'flag_images/hk.png',
  'flag_images/hn.png',
  'flag_images/hr.png',
  'flag_images/ht.png',
  'flag_images/hu.png',
  'flag_images/id.png',
  'flag_images/ie.png',
  'flag_images/il.png',
  'flag_images/im.png',
  'flag_images/in.png',
  'flag_images/iq.png',
  'flag_images/ir.png',
  'flag_images/is.png',
  'flag_images/it.png',
  'flag_images/je.png',
  'flag_images/jm.png',
  'flag_images/jo.png',
  'flag_images/jp.png',
  'flag_images/ke.png',
  'flag_images/kg.png',
  'flag_images/kh.png',
  'flag_images/ki.png',
  'flag_images/km.png',
  'flag_images/kn.png',
  'flag_images/kp.png',
  'flag_images/kr.png',
  'flag_images/kw.png',
  'flag_images/ky.png',
  'flag_images/kz.png',
  'flag_images/la.png',
  'flag_images/lb.png',
  'flag_images/lc.png',
  'flag_images/li.png',
  'flag_images/lk.png',
  'flag_images/lr.png',
  'flag_images/ls.png',
  'flag_images/lt.png',
  'flag_images/lu.png',
  'flag_images/lv.png',
  'flag_images/ly.png',
  'flag_images/ma.png',
  'flag_images/mc.png',
  'flag_images/md.png',
  'flag_images/me.png',
  'flag_images/mf.png',
  'flag_images/mg.png',
  'flag_images/mh.png',
  'flag_images/mk.png',
  'flag_images/ml.png',
  'flag_images/mm.png',
  'flag_images/mn.png',
  'flag_images/mo.png',
  'flag_images/mp.png',
  'flag_images/mq.png',
  'flag_images/mr.png',
  'flag_images/ms.png',
  'flag_images/mt.png',
  'flag_images/mu.png',
  'flag_images/mv.png',
  'flag_images/mw.png',
  'flag_images/mx.png',
  'flag_images/my.png',
  'flag_images/mz.png',
  'flag_images/na.png',
  'flag_images/nc.png',
  'flag_images/ne.png',
  'flag_images/nf.png',
  'flag_images/ng.png',
  'flag_images/ni.png',
  'flag_images/nl.png',
  'flag_images/no.png',
  'flag_images/np.png',
  'flag_images/nr.png',
  'flag_images/nu.png',
  'flag_images/nz.png',
  'flag_images/om.png',
  'flag_images/pa.png',
  'flag_images/pe.png',
  'flag_images/pf.png',
  'flag_images/pg.png',
  'flag_images/ph.png',
  'flag_images/pk.png',
  'flag_images/pl.png',
  'flag_images/pm.png',
  'flag_images/pn.png',
  'flag_images/pr.png',
  'flag_images/ps.png',
  'flag_images/pt.png',
  'flag_images/pw.png',
  'flag_images/py.png',
  'flag_images/qa.png',
  'flag_images/re.png',
  'flag_images/ro.png',
  'flag_images/rs.png',
  'flag_images/ru.png',
  'flag_images/rw.png',
  'flag_images/sa.png',
  'flag_images/sb.png',
  'flag_images/sc.png',
  'flag_images/sd.png',
  'flag_images/se.png',
  'flag_images/sg.png',
  'flag_images/si.png',
  'flag_images/sj.png',
  'flag_images/sk.png',
  'flag_images/sl.png',
  'flag_images/sm.png',
  'flag_images/sn.png',
  'flag_images/so.png',
  'flag_images/sr.png',
  'flag_images/ss.png',
  'flag_images/st.png',
  'flag_images/sv.png',
  'flag_images/sy.png',
  'flag_images/sz.png',
  'flag_images/td.png',
  'flag_images/tg.png',
  'flag_images/th.png',
  'flag_images/tj.png',
  'flag_images/tk.png',
  'flag_images/tl.png',
  'flag_images/tm.png',
  'flag_images/tn.png',
  'flag_images/to.png',
  'flag_images/tr.png',
  'flag_images/tt.png',
  'flag_images/tv.png',
  'flag_images/tw.png',
  'flag_images/tz.png',
  'flag_images/ua.png',
  'flag_images/ug.png',
  'flag_images/us.png',
  'flag_images/uy.png',
  'flag_images/uz.png',
  'flag_images/vc.png',
  'flag_images/ve.png',
  'flag_images/vg.png',
  'flag_images/vn.png',
  'flag_images/vu.png',
  'flag_images/wf.png',
  'flag_images/ws.png',
  'flag_images/xk.png',
  'flag_images/ye.png',
  'flag_images/yt.png',
  'flag_images/za.png',
  'flag_images/zm.png',
  'flag_images/zw.png'
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});