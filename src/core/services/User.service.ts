export default class UserService {
    static getUserInfo() { 
        return Promise.resolve({
            name: 'Esteban',
            email: 'esteban@test.com',
            age: 30,
            address: 'Calle 123',
            phone: '123-456-7890',
        });
    }  
}