import { api } from "./baseApi.service";

export interface IImage {
  Hash: string;
  Url: string;
  ThumbnailUrl: string;
  Name: string;
}

class ImageService {
  async getAll() {
    const response = await api.get<IImage[]>('/image/all');
    return response.data;
  }
}

export default new ImageService();