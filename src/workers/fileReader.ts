import { CommonApisImp } from "@/apis/commonApisImp";

export class FileReader {
  commonApis: CommonApisImp;

  constructor() {
    this.commonApis = new CommonApisImp();
  }

  Read = async (url: string): Promise<any> => {
    return await this.commonApis.ReadFile(url);
  };
}
