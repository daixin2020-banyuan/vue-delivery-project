import request from '../common/request';
import { host } from '../common/config';

export async function menu (){

   const result = await request({
      url:`${host}/menu/restaurantId/{id}`,
      method:  'get',

   });

   return result;
}