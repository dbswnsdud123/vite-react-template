import { atom } from "recoil";
// import { recoilPersist } from "recoil-persist";

// const { persistAtom } = recoilPersist();

const testState = atom({
  key: `testState`,
  default: true,
  //   effects_UNSTABLE: [persistAtom],
});

export { testState };
