
import { faker } from "@faker-js/faker";
export default (user,count,userIdIds,planIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
userId: userIdIds[i % userIdIds.length],
amount: faker.date.past(""),
paymentDate: faker.date.past(""),
planId: planIdIds[i % planIdIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
