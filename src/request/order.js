import request from '../common/request';
import { host } from '../common/config';

export async function order (id){

   const result = await request({
      url:`${host}/order/5f97db3a756e3f76a7a73a4e`,
      method:  'get',
      // data:{ token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVwZGF0ZWRBdCI6IjIwMjAtMTAtMjJUMTE6MDQ6MzQuOTIyWiIsIl9pZCI6IjVmOTdkYjNhNzU2ZTNmNzZhN2E3M2E0ZSIsInVzZXJuYW1lIjoiWWJzd2VNYWkiLCJwYXNzd29yZCI6IiQyYiQxMCRRT283UEIyMW5LRm5YblNsd1l6TGRleWhZMTd0UE93V3pFTzZGck1PMDdOY1RaRzVHYS9pLiIsIm5pY2tuYW1lIjoiIiwiY3JlYXRlZEF0IjoiMjAyMC0xMC0yN1QwODozMjo1OC45MzBaIiwiX192IjowfSwiaWF0IjoxNjAzODgyNDU2LCJleHAiOjE2MDQxNDE2NTZ9.kzWi_kvW-9qs11LEHAnpddH02KzVX6RdDhS1TlLR9IA' }
      data:{
         id
      }
   });

   return result;
}