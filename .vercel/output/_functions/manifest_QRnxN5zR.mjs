import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_397yNjBD.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_C87BgyEn.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/ahmadsaif/project/saif-porto/","cacheDir":"file:///home/ahmadsaif/project/saif-porto/node_modules/.astro/","outDir":"file:///home/ahmadsaif/project/saif-porto/dist/","srcDir":"file:///home/ahmadsaif/project/saif-porto/src/","publicDir":"file:///home/ahmadsaif/project/saif-porto/public/","buildClientDir":"file:///home/ahmadsaif/project/saif-porto/dist/client/","buildServerDir":"file:///home/ahmadsaif/project/saif-porto/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ahmadsaif/project/saif-porto/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/ahmadsaif/project/saif-porto/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/ahmadsaif/project/saif-porto/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/ahmadsaif/project/saif-porto/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/ahmadsaif/project/saif-porto/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/ahmadsaif/project/saif-porto/src/pages/projects/[slug].astro",{"propagation":"none","containsHead":true}],["/home/ahmadsaif/project/saif-porto/src/pages/projects/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"pages/projects/_slug_.astro.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","/home/ahmadsaif/project/saif-porto/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CJLfpA5d.mjs","/home/ahmadsaif/project/saif-porto/.astro/content-modules.mjs":"chunks/content-modules_xH613X4f.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DLAxhy8d.mjs","/home/ahmadsaif/project/saif-porto/src/features/blog/content/en/example-post.mdx?astroPropagatedAssets":"chunks/example-post_wb-o6lkF.mjs","/home/ahmadsaif/project/saif-porto/.astro/content-assets.mjs":"chunks/content-assets_y9oRGkiA.mjs","\u0000@astrojs-manifest":"manifest_QRnxN5zR.mjs","/home/ahmadsaif/project/saif-porto/src/features/blog/content/en/example-post.mdx":"chunks/example-post_BtCdzrTU.mjs","/home/ahmadsaif/project/saif-porto/src/features/blog/screens/AllBlogPostsScreen.astro?astro&type=script&index=0&lang.ts":"_astro/AllBlogPostsScreen.astro_astro_type_script_index_0_lang.Dds-Q8QV.js","/home/ahmadsaif/project/saif-porto/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/home/ahmadsaif/project/saif-porto/src/features/projects/components/ProjectGallery":"_astro/ProjectGallery.DlKz5Dv5.js","@astrojs/react/client.js":"_astro/client.DHlcDgOy.js","/home/ahmadsaif/project/saif-porto/src/features/contact/components/ContactForm.tsx":"_astro/ContactForm.CRxdpeIv.js","@/features/blog/components/FilteredPostsList":"_astro/FilteredPostsList.CfnaPLvk.js","sonner":"_astro/_astro-entry_sonner.4vYjCxSX.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/error.BLk5Xs8z.png","/_astro/error-dark.BsA8S2pp.png","/_astro/alysa.Dp7JjaXi.jpeg","/_astro/dya-collection.CPyN4Ko_.png","/_astro/placeholder.DtIEadZp.webp","/_astro/punk-merch.COnwvKMQ.png","/_astro/user-hero.BErFhdJQ.jpeg","/_astro/_slug_.fWsalheE.css","/_astro/AllBlogPostsScreen.astro_astro_type_script_index_0_lang.Dds-Q8QV.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/_astro/ContactForm.CRxdpeIv.js","/_astro/FilteredPostsList.CfnaPLvk.js","/_astro/ProjectGallery.DlKz5Dv5.js","/_astro/_astro-entry_sonner.4vYjCxSX.js","/_astro/_astro-entry_sonner.CxK2reZS.js","/_astro/blogFilterStore.B-Rf4WRp.js","/_astro/client.DHlcDgOy.js","/_astro/createLucideIcon.OuBe4xOE.js","/_astro/index.BOT7WSGe.js","/_astro/index.CDuF_csM.js","/_astro/input.Dn1O02d6.js","/favicons/dark-mode/apple-touch-icon.png","/favicons/dark-mode/favicon-96x96.png","/favicons/dark-mode/favicon.ico","/favicons/dark-mode/favicon.svg","/favicons/dark-mode/site.webmanifest","/favicons/dark-mode/web-app-manifest-192x192.png","/favicons/dark-mode/web-app-manifest-512x512.png","/favicons/light-mode/apple-touch-icon.png","/favicons/light-mode/favicon-96x96.png","/favicons/light-mode/favicon.ico","/favicons/light-mode/favicon.svg","/favicons/light-mode/site.webmanifest","/favicons/light-mode/web-app-manifest-192x192.png","/favicons/light-mode/web-app-manifest-512x512.png","/404.html","/blog/index.html","/contact/index.html","/projects/index.html","/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"gyDhf0Gs8MbRZUTTO7I1zvLlJTCsTXqLIWBhO1swYHs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
