// あとで読む
// https://github.com/understanding-astro/astro-middleware-examples/tree/master/jwt-auth
// https://vercel.com/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication

export function onRequest({ locals, request }, next) {
  // intercept data from a request
  // optionally, modify the properties in `locals`
  locals.title = "New title";

  console.log("onRequest", locals, request);
  // return a Response or the result of calling `next()`
  return next();
}
