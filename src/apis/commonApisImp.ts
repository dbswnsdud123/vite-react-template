import { CommonApis } from "./commonApis";
import axios from "axios";

export class CommonApisImp implements CommonApis {
  private axiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }

  ReadFile = async (url: string): Promise<any> => {
    return await this.axiosInstance
      .get(url)
      .then((res) => res.data)
      .catch(() => {
        return "";
      });
  };
}
