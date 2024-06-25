import {test, expect} from '@playwright/test'

const url = 'https://reqres.in';

test.describe('API REQUESTS', () => {

  test('testing GET requests', async ({request}) => {
    const res = await request.get(`${url}/api/users/2`);
    //console.log(res, "- responce");
    expect(res.status()).toBe(200);
    const resBody = JSON.parse( await res.text() )
    console.log(resBody , ': - resbody');
    expect.soft(resBody.data.id, `ID SHOULD BE ${resBody.data.id}`).toBe(2);
    expect(resBody.data.first_name).toBe('Janet');
  })

  test('testing POST requests', async ({request}) => {
    const res = await request.post(`${url}/api/user`, {
      data: {
        id: 222
      }
    });
    console.log(res, '----**-**-Responce');
    const resBody = JSON.parse(await res.text());
    console.log(resBody, 'RESBODY');

  })

  test('testing POST requests auth', async ({request}) => {
    const res = await request.post(`${url}/api/register`, {
      data: {

               "email": "eve.holt@reqres.in",
               "password": "pistol"

      }
    });
    console.log(res, '----**-**-Responce');
    expect(res.status()).toBe(200);
    const resBody = JSON.parse(await res.text());
    console.log(resBody, 'RESBODY');
    expect(resBody.id).toBe(4);

  })

  test('testing PUT request', async ({request}) => {
    const res = await request.put(`${url}/api/users/2`, {
      data: {

        "email": "morpheus",
        "password": "zion resident"

      }
    });
    console.log(res, '----**-**-Responce');
    expect(res.status()).toBe(200);
    const resBody = JSON.parse(await res.text());
    console.log(resBody, 'RESBODY');
    expect(resBody.email).toBe('morpheus');

  })

  test('testing DElETE request', async ({request}) => {
    const res = await request.delete(`${url}/api/users/2`);
    console.log(res, '----**-**-Responce');
    expect(res.status()).toBe(204);
    const resBody = await res.text();
    console.log(resBody, 'RESBODY');


  })

  test.only('testing patch request', async ({request}) => {
    const res = await request.patch(`${url}/api/users/2`, {
      data:{
        'email': 'OLEG@mail.com'

      }
    }); // here PATCH WORKS INCORRECT -- critical bug ** DONT UPDATE FIELD BUT REMOVE ALL OTHER
    console.log(res, '**-**-Responce');
    expect(res.status()).toBe(200);
    const resBody = JSON.parse(await res.text());
    console.log(resBody, 'RESBODY');
    expect(resBody.email).toBe('OLEG@mail.com');

  })


})