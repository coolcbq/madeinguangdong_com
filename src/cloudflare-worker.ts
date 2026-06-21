type Env = {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
};

function assetRequest(request: Request, pathname: string) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url.toString(), request);
}

export default {
  fetch(request: Request, env: Env) {
    const url = new URL(request.url);

    if (url.pathname === '/') {
      return env.ASSETS.fetch(assetRequest(request, '/index.html'));
    }

    return env.ASSETS.fetch(request);
  }
};
