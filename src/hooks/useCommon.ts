import { testState } from "@/stores/commonStore";
import { useRecoilState } from "recoil";

import { FileReader } from "@/workers/fileReader";

const UseCommon = () => {
  const fileReader = new FileReader();

  const [test, setTestState] = useRecoilState(testState);

  const ReadFile = async (url: string) => {
    const file = await fileReader.Read(url);
    setTestState(file);
    console.log(file);
    return file;
  };

  return {
    test,
    setTestState,
    ReadFile,
  };
};

export default UseCommon;
