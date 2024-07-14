// => Berisi config untuk API
// EXAMPLE
export const configEnv = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  assetBaseUrl: process.env.NEXT_PUBLIC_ASSET_STORAGE_BASE_URL,
  nodeEnv: process.env.NEXT_PUBLIC_NODE_ENV,
  stage: process.env.NEXT_PUBLIC_STAGE,
  version: process.env.NEXT_PUBLIC_VERSION,
  restApiUrlCsr: "/api",
  restApiUrlSsr: process.env.NEXT_PUBLIC_REST_API_URL,
  tokenExpired: Number(process.env.NEXT_PUBLIC_TOKEN_EXPIRED) || 0,
  service: {
    member: process.env.NEXT_PUBLIC_SERVICE_MEMBER_PATH || "",
    address: process.env.NEXT_PUBLIC_SERVICE_ADDRESS_PATH || "",
  },
  keyToken: process.env.NEXT_PUBLIC_CREDENTIAL_TOKEN,
  keyProfile: process.env.NEXT_PUBLIC_CREDENTIAL_PROFILE,
  otpExpired: Number(process.env.NEXT_PUBLIC_OTP_EXPIRED || 90),
  maxUploadSize: Number(process.env.NEXT_PUBLIC_MAX_UPLOAD_SIZE || 2),
  gTagId: process.env.NEXT_PUBLIC_GTAGID,
  mapUrlApiKey: process.env.NEXT_PUBLIC_MAP_GOOGLE_API_KEY,
};
