# Local-testing image for the AIST Jekyll site.
# Mirrors the CI toolchain (.github/workflows/deploy.yml): Ruby 3.3 + Node for pagefind.
FROM ruby:3.3-slim-bookworm

ENV DEBIAN_FRONTEND=noninteractive \
    BUNDLE_PATH=/usr/local/bundle \
    BUNDLE_APP_CONFIG=/usr/local/bundle \
    JEKYLL_ENV=production \
    LANG=C.UTF-8

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        git \
        nodejs \
        npm \
        ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/site

# Gems are baked into the image so a plain `docker compose up` does not need to
# resolve anything at runtime. The bundler version is taken from the lockfile.
COPY Gemfile Gemfile.lock ./
RUN gem install bundler -v "$(tail -n 1 Gemfile.lock | tr -d '[:space:]')" \
    && bundle install --jobs 4 --retry 3

# Search index generator, same tool CI runs via `npx pagefind`.
RUN npm install -g pagefind@1

COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 4000 35729

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["serve"]
