type Env = {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
};

const REDIRECTS: Record<string, string> = {
  '/index.html': '/',
  '/chanpin-madeinguangdong.html': '/guangdong-products.html'
};

function assetRequest(request: Request, pathname: string) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url.toString(), request);
}

export default {
  fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    const redirectPath = REDIRECTS[url.pathname];

    if (redirectPath) {
      url.pathname = redirectPath;
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/') {
      return env.ASSETS.fetch(assetRequest(request, '/index.html'));
    }

    return env.ASSETS.fetch(request);
  }
};
