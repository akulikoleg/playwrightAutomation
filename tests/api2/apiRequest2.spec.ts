import {test, expect} from '@playwright/test'

const url = 'https://reqres.in/';

test.describe('API requests', ()=>{

  test('testing GET requests', async ({request})=>{
      const res = await request.get(`${url}api/users/2`)
     // console.log(res, 'response');
      expect(res.status()).toBe(200);
      const resBody = JSON.parse(await res.text());
      console.log(resBody, `: - resbody`);
      expect(resBody.data.id, `ID should be ${resBody.data.id}`).toBe(2);
      expect(resBody.data.email).toBe('janet.weaver@reqres.in');

  })

  test('testing POST requests', async ({request})=>{
      const res = await request.post(`${url}api/users`, {
        data: {
          "name": "morpheus",
          "job": "leader"
        }
      });
      expect(res.status()).toBe(201);
      //console.log(res, '----**-**-Responce');
      const resBody = JSON.parse(await res.text());
      console.log(resBody, `: - resbody`);

  })

  ///api/register
  test('testing POST request Register', async ({request})=>{
    const res = await request.post(`${url}api/register`, {
      data:{
        email: "eve.holt@reqres.in",
        password: "pistol"
      }
    });
    expect(res.status()).toBe(200);
    //console.log(res, '----**-**-Responce');
    const resBody = JSON.parse(await res.text());
    expect(resBody.id).toBe(4);

  })

  test('testing PUT request Register', async ({request})=>{
    const res = await request.put(`${url}api/users/2`, {
      data: {
        "name": "jack",
        "job": "good boy",
        'noname': 'jackiechan'
      }
    });
    expect(res.status()).toBe(200);
    //console.log(res, '----**-**-Responce');
    const resBody = JSON.parse(await res.text());
    console.log(resBody, `: - resbody`);
    expect(resBody.name).toBe('jack');

  })

  test('testing Patch request Register', async ({request})=>{
    const res = await request.patch(`${url}api/users/2`, {
      data: {
        "name": "jack2"
      }
    });
    expect(res.status()).toBe(200);
    //console.log(res, '----**-**-Responce');
    const resBody = JSON.parse(await res.text());
    console.log(resBody, `: - resbody`);
    expect(resBody.name).toBe('jack2');

  })

  test.only('testing DELETE request Register', async ({request})=>{
    const res = await request.delete(`${url}api/users/2`);
    expect(res.status()).toBe(204);
    console.log(res, '----**-**-Responce');
    const resBody = await res.text();
    console.log(resBody, `: - resbody`);
    //expect(resBody.name).toBe('jack2');

  })



})
