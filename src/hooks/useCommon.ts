import { testState } from "@/stores/commonStore";
import { useRecoilState } from "recoil";
import { container } from "tsyringe";

import { FileReader } from "@/workers/fileReader";

const UseCommon = () => {
  const fileReader = container.resolve(FileReader);

  const [test, setTestState] = useRecoilState(testState);

  const ReadFile = async (url: string) => {
    return await fileReader.Read(url);
  };

  return {
    test,
    ReadFile,
  };
};

export default UseCommon;
