#!/bin/bash
#
# Upload the current directory to the CDN.
#
set -e

if [ "$1" = "prod" ]; then
    bucket="s3://authentiq-cdn/"
elif [ "$1" = "test" ]; then
    bucket="s3://authentiq-cdn-test/"
else
    echo "Please specify 'prod' or 'test'."
    exit 1
fi

aws s3 sync --delete --acl public-read --exclude ".git/*" --exclude "deploy.sh" . $bucket

if [ "$1" = "prod" ]; then
    aws configure set preview.cloudfront true
    aws cloudfront create-invalidation --distribution-id ECD0BA28GO99C --paths /
fi

