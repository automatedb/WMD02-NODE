// const promise1 = new Promise((resolve, reject) => {
//     // C'est du code long à executer (10 sec)
//     setTimeout(() => {
//         resolve("Promise 1");
//     }, 2000);
//     // reject('error');
// });
//
// const promise2 = new Promise((resolve, reject) => {
//     // C'est du code long à executer (10 sec)
//     resolve("Promise 2");
// });
//
// const promise3 = new Promise((resolve, reject) => {
//     Promise.all([
//         promise1,
//         promise2
//     ]).then(
//         result => resolve(result)
//     ).catch(e => console.log(e));
// });
//
// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 4");
//     }, 5000);
// });
//
// // promise1.then(
// //     result => console.log(result)
// // ).catch(e => console.log(e));
// //
// // promise2.then(
// //     result => console.log(result)
// // ).catch(e => console.log(e));
//
// Promise.all([
//     promise3,
//     promise4
// ]).then(
//     results => console.log(results)
// ).catch(e => console.log(e));

class Model {
    save(firstname) {
        return new Promise(resolve => resolve({
            email: 'jon.doe@domain.tld',
            firstname
        }))
    }
}

// class User {
//     create() {
//         return new Promise(resolve => resolve(new Model()))
//     }
// }
//
// const user = new User();
//
// user.create().then(
//     result => {
//         result.save('john').then(
//             result => console.log(result)
//         ).catch(e => console.log(e))
//     }
// );

user.create().then(
    result => result.save('john')
).then(
    result => console.log(result)
).catch(e => console.log(e));
