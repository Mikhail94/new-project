const Calculator = require(`../func`)

describe ('Calculator test', function () {                        
                     
    beforeAll ( async () => {                                      
        console.log('!!!!test starts!!!!')
    })
    afterAll ( async () => {                                      
        console.log('!!!!test finished!!!!')
    })
    beforeEach ( async () => {                                 
        console.log('new test')
    })
    test('should return the sum of two numbers when called with two arguments', async () => {
        const calculator = new Calculator()    
        const result = calculator.add(3, 7)
            expect(result).toEqual(10);
        })    

    test('should return the multiplication of two numbers when called with two arguments', async () => {
        const calculator = new Calculator()    
        const result = calculator.multiply(3, 7)
            expect(result).toEqual(10);
        })

    test ('should return the difference of two numbers when called with two arguments', async () => {
        const calculator = new Calculator()    
        const result = calculator.subtraction(20, 3)
            expect(result).toEqual(17);
        })

    test ('should return the division of two numbers when called with two arguments', async () => {
        const calculator = new Calculator()    
        const result = calculator.divide(21, 3)
            expect(result).toEqual(7);
        })

    test ('should return NaN when dividing by zero', async () => {
        const calculator = new Calculator()    
        const result = calculator.divide(21, 0)
        expect(result).toEqual(Infinity);
        })

    test ('should return the exponentiation of two numbers when called with two arguments', async () => {
        const calculator = new Calculator()    
        const result = calculator.exponentiation(21)
        expect(result).toEqual(441);
        })
        

 
    })










