import crypto from "node:crypto";

export const createHash = <T>(params: T[]) => {
  const hash = crypto.createHash("sha256");
  hash.update(JSON.stringify(params));
  return hash.digest("hex");
};
