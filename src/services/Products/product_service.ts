import { Product } from '../../types/product';
import {} from './product_api';

const dummyProducts: Product[] = [
  {
    id: 1,
    thumbnailUrl: 'https://r.r10s.jp/ran/img/1001/0004/582/330/870/851/10010004582330870851_1.jpg',
    title: 'パルスオキシメーター',
    summary: '測定項目はSpO2、PR、PI\n患者さんに優しいパルスオキシメータ',
    description: ''
  },
  {
    id: 2,
    thumbnailUrl: 'https://www.cardiovascular.abbott/content/dam/bss/divisionalsites/cv/images/products/confirm-rx-product-perspective.png',
    title: '植込み型心電図記録計',
    summary: 'SHARPSENSEテクノロジー搭載\nCONFIRM RX 植込み型心電図記録計',
    description: ''
  },
  {
    id: 3,
    thumbnailUrl: 'https://www.c-ventec.jp/wp-content/uploads/2020/06/VOCSN_03_768x.jpg',
    title: 'オールインワン VOCSN Ventilator',
    summary: 'オールインワン VOCSN Ventilator\n排痰補助まで実現　カフベンテック社',
    description: ''
  },
]

export const getProductRecommends = (): Product[] => {
  return dummyProducts;
}