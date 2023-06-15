/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';

const App = () => {
   let info: {
      officeId: number;
      isOpened: boolean;
      contacts: {
         phone: string;
         email: string;
         address: {
            city: string;
         };
      };
   };

   const user = {
      officeId: 45,
      isOpened: false,
      contacts: {
         phone: '+38090000000',
         email: 'my@gmail.com',
         address: {
            city: 'NewYork',
         },
      },
   };

   // info = user;

   const cars: string[] = ['honda', 'bmw', 'cadillac', 'audi'];

   for (const car of cars) {
      console.log(car.toUpperCase());
   }

   // taples

   const someArr: [number, string] = [101, 'ggd'];

   const someSecond: readonly [number, string, ...boolean[]] = [
      101,
      'ggd',
      true,
      false,
   ];

   console.log(someArr);

   // ---------------T E S T --- T A S K------------------------

   interface User {
      name: string;
      password: string;
      age: number;
      skills: string[];
   }

   interface LogDataUser {
      log: (count: number) => number;
   }

   interface UserWithRole extends User, LogDataUser {
      roleId: number;
   }

   let newUser: UserWithRole = {
      name: 'newUser',
      password: '1111111',
      age: 33,
      skills: ['ts', 'js', 'react'],
      roleId: 22,
      log(id) {
         return id * 2;
      },
   };

   // ------------------T E S T --- T A S K-----------------------
   interface Payment {
      sum: number;
      from: number;
      to: number;
   }

   const reqest1: Payment = {
      sum: 10000,
      from: 2,
      to: 4,
   };

   // Ответ
   enum ResponseStatus {
      Success = 'success',
      Rejected = 'failed',
   }

   interface DataSuccess {
      databaseId: number;
      sum: number;
      from: number;
      to: number;
   }

   interface DataFail {
      errorMessage: string;
      errorCode: number;
   }

   interface ResponseSuccess {
      status: ResponseStatus.Success;
      data: DataSuccess;
   }

   interface ResponseFailed {
      status: ResponseStatus.Rejected;
      data: DataFail;
   }

   const respSuccessFirst: Response = {
      status: ResponseStatus.Success,
      data: {
         databaseId: 567,
         sum: 10000,
         from: 2,
         to: 4,
      },
   };

   const respSuccessSecond: Response = {
      status: ResponseStatus.Rejected,
      data: {
         errorMessage: 'Недостаточно средств',
         errorCode: 4,
      },
   };
   type RespData = DataSuccess | DataFail;
   type Response = ResponseSuccess | ResponseFailed;

   function isResponseSuccess(response: Response): response is ResponseSuccess {
      if (response.status === ResponseStatus.Success) {
         return true;
      }
      return false;
   }

   function getResponse(response: Response): number {
      if (isResponseSuccess(response)) {
         return response.data.databaseId;
      }
      return response.data.errorCode;
   }

   function isDataSuccess(data: RespData): data is DataSuccess {
      return 'databaseId' in data;
   }

   function getDataFromResp(response: Response): number {
      if (isDataSuccess(response.data)) {
         return response.data.databaseId;
      } else {
         throw new Error(response.data.errorMessage);
      }
   }

   // function get(): ResponseSuccess | ResponseFailed {}
   //
   // ------------------T E S T --- T A S K-----------------------

   abstract class Logger {
      abstract log(m: string): void;

      printDate(date: Date): void {
         this.log(date.toString());
      }
   }

   class MyLogger extends Logger {
      log(m: string): void {
         console.log(m);
      }

      logWithDate(m: string) {
         this.log(m);
         this.printDate(new Date());
      }
   }

   const t = new MyLogger();
   t.logWithDate('hello TypeScript World');




   // ------------------T E S T --- T A S K-----------------------







   return (
      <div>
         <h2>Learn React</h2>
      </div>
   );
};

export default App;
