# Authentiq CDN Origin Repository

Origin repository for the Authentiq CDN. Files are served on the following URL.

    https://cdn.authentiq.io/<path>/<filename>

For instance:

    https://cdn.authentiq.io/logos/small/app-icon-rounded.png

## Deploying

Deploys are normally managed automatically through CI.

### Deploy to test

To copy the contents of the current checkout to the test bucket, run:

    ./deploy test

### Deploy to prod

To copy the contents of the current checkout to the production bucket, run:

    ./deploy prod
