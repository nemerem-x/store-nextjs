"use client";

import { RecoilRoot, RecoilRootProps } from "recoil";

export const RecoilProvider = ({ children }: RecoilRootProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
