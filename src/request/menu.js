import request from '../common/request';
import { host } from '../common/config';

export async function menu (data){

   const result = await request({
      url:`${host}/menu/restaurantId/59879867376b1e0011183f83`,
      method:  'get',
      data

   });

   return result;
}