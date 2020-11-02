import request from '../common/request';
import { host } from '../common/config';

export async function register (data){

   console.log(data);
   const result = await request({
      url:`${host}/user/register`,
      method:  'post',
      data
   });

   return result;
}