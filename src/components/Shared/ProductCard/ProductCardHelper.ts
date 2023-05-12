import { ICommonHelperParams } from '@base/BaseInterface';
import axios from 'axios';
import Compressor from 'compressorjs';
import { IProductCardProps } from './ProductCardType';

export const useProductCardHelper = (
  params: ICommonHelperParams<IProductCardProps, any>,
) => {
  const downloadImageHandler = async (url: string) => {
    try {
      const response = await axios.get(url, { responseType: 'blob' });
      const blob = response.data;

      new Compressor(blob, {
        quality: 1,
        convertTypes: ['image/jpeg'],
        success: (result) => {
          const file = new File([result], 'image.jpg', { type: 'image/jpeg' });

          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const imageURL = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = imageURL;
            link.download = 'image.jpg';
            link.click();
          };
        },
        error: (err) => {
          console.log(err.message);
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return { downloadImageHandler };
};
