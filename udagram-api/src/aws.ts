import AWS = require("aws-sdk");
import { config } from "./config/config";

//Credentials are auto set according to the documentation https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html and the default profile is "Default anyway"

AWS.config = new AWS.Config({
  accessKeyId: config.aws_access_key,
  secretAccessKey: config.aws_secret_access_key,
  region: config.aws_region,
  signatureVersion: "v4",
});

export const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: config.aws_region,
  params: { Bucket: config.aws_media_bucket },
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;
  const signedUrl = s3.getSignedUrl("getObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
  return signedUrl;
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;
  const signedUrl = s3.getSignedUrl("putObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });

  return signedUrl;
}
