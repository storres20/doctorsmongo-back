# Doctor's Mongo Backend

## Collection: Users

`Get all elements`

`GET` method

https://doctorsmongo-back.vercel.app/api/v1/users

```json
[

      {
            "_id": "647f61ad180318d17ba423df",
            "username": "Raymond"
      },
      {
            "_id": "647f61c6180318d17ba423e0",
            "username": "Boaz"
      }

]
```

`Get an element by ID`

`GET` method

https://doctorsmongo-back.vercel.app/api/v1/users/647f61ad180318d17ba423df

```json
{

      "_id": "647f61ad180318d17ba423df",
      "username": "Raymond"

}
```

## Collection: Doctors

`Get all elements`

`GET` method

https://doctorsmongo-back.vercel.app/api/v1/doctors

```json
[

      {
            "_id": "647f6220180318d17ba423e1",
            "name": "Michael",
            "lastname": "Smith",
            "speciality": "Cardiologist",
            "experience": 7,
            "consultation": "70.0",
            "image": "https://i.ibb.co/1G077Cd/088e314676af.jpg"
      },
      {
            "_id": "647f6282180318d17ba423e2",
            "name": "Summer",
            "lastname": "York",
            "speciality": "Pediatrics",
            "experience": 5,
            "consultation": "50.0",
            "image": "https://i.ibb.co/XFLjgmW/41893ab2f36a.jpg"
      },
      {
            "_id": "64810f70dcb5ccf955b76c86",
            "name": "mike",
            "lastname": "mouse",
            "speciality": "Pediatrics",
            "experience": 3,
            "consultation": "30",
            "image": "https://i.ibb.co/C71SH1Z/51dc8f2a3597.jpg",
            "__v": 0
      }

]
```

`Get an element by ID`

`GET` method

https://doctorsmongo-back.vercel.app/api/v1/doctors/647f6220180318d17ba423e1

```json
{

      "_id": "647f6220180318d17ba423e1",
      "name": "Michael",
      "lastname": "Smith",
      "speciality": "Cardiologist",
      "experience": 7,
      "consultation": "70.0",
      "image": "https://i.ibb.co/1G077Cd/088e314676af.jpg"

}
```

## Collection: Appointments

`Get all elements`

`GET` method

https://doctorsmongo-back.vercel.app/api/v1/appointments

```json
[

      {
            "_id": "64809c446a3dc900cea0049d",
            "doctor_id": "647f6282180318d17ba423e2",
            "user_id": "647f61ad180318d17ba423df",
            "datetime": "2023-04-14T12:00:00.000Z",
            "city": "Mexico"
      },
      {
            "_id": "64809dbf6a3dc900cea0049e",
            "doctor_id": "647f6220180318d17ba423e1",
            "user_id": "647f61c6180318d17ba423e0",
            "datetime": "2023-04-27T11:46:00.000Z",
            "city": "Nairobi"
      },
      {
            "_id": "64810f828b201ff9e057236c",
            "doctor_id": "64810f70dcb5ccf955b76c86",
            "user_id": "647f61ad180318d17ba423df",
            "datetime": "2023-06-14T08:00",
            "city": "Mumbay",
            "__v": 0
      }

]
```

`Get an element by ID`

`GET` method

https://doctorsmongo-back.vercel.app/api/v1/appointments/64809c446a3dc900cea0049d

```json
{

      "_id": "64809c446a3dc900cea0049d",
      "doctor_id": "647f6282180318d17ba423e2",
      "user_id": "647f61ad180318d17ba423df",
      "datetime": "2023-04-14T12:00:00.000Z",
      "city": "Mexico"

}
```
