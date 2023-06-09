import { atom } from "recoil";
import { ProductObj } from "../utils/interface";

const bagState = atom({
  key: "bagState",
  default: [] as ProductObj[],
});

export { bagState };
