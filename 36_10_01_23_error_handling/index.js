function testError(param) {
    try {
        //code...
        console.log('start of try runs');
        if(!param) {
            throw new Error('Param is undefined');
            /*throw {
                name: 'CustomError', 
                message: 'Param is undefined'
            }
            */

        }

        //console.log(param.test);
        console.log('continue');
    } catch (error) {
        console.log(error);
        //console.log(error.name);
        console.log(error.message);
    } finally {
        console.log('code executed');
    }
}

testError();