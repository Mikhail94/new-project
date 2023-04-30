const axios = require('axios');
const validator = require('jsonschema');
const addItemToTheBasket = require('../data/addItemToTheBasket.v1.Scheme.json');
const searchItem = require('../data/searchItem.v1.Scheme.json');

describe(`API tests Oz.by`, function () {
    describe('test#1 Add Item To The Basket', function () {
        let response;
        beforeAll(async () => {
            response = await axios.get('https://oz.by/goods/ajax/html_box.php', {
                params: {
                    idGoods: '10751217',
                    type: 'html'
                },            
            })
        });

        test('status code should be 200', async () => {
            expect(response.status).toEqual(200)
        })

        test('json schema should be valid', async () => {
            const result = await validator.validate(response.data, addItemToTheBasket);
            expect(result.valid).toEqual(true)
        })
    })
    
describe(`API tests Oz.by`, function () {
    describe('test#2 Serch by request', function () {
        let response;
        beforeAll(async () => {
            response = await axios.get('https://mc.yandex.ru/watch/1067243?wmode=7&page-url=https%3A%2F%2Foz.by%2Fsearch%2F%3Favailability%3D1%3B2%3B3%26c%3D0%26q%3Dtest%26sort%3Drelev_desc%26type%3D0&page-ref=https%3A%2F%2Foz.by%2Fsearch%2F%3Fq%3Dtest&charset=utf-8&uah=chu%0A%22Chromium%22%3Bv%3D%22112%22%2C%22Google%20Chrome%22%3Bv%3D%22112%22%2C%22Not%3AA-Brand%22%3Bv%3D%2299%22%0Acha%0Ax86%0Achb%0A64%0Achf%0A112.0.5615.86%0Achl%0A%22Chromium%22%3Bv%3D%22112.0.5615.86%22%2C%22Google%20Chrome%22%3Bv%3D%22112.0.5615.86%22%2C%22Not%3AA-Brand%22%3Bv%3D%2299.0.0.0%22%0Achm%0A%3F0%0Achp%0AWindows%0Achv%0A10.0.0&browser-info=pv%3A1%3Avf%3Aihb4q796484i93absudza7%3Afp%3A5586%3Afu%3A0%3Aen%3Autf-8%3Ala%3Aen-US%3Av%3A1012%3Acn%3A1%3Adp%3A0%3Als%3A739665959349%3Ahid%3A1072540488%3Az%3A180%3Ai%3A20230416131615%3Aet%3A1681640175%3Ac%3A1%3Arn%3A848380018%3Arqn%3A6%3Au%3A1681640066630145299%3Aw%3A911x704%3As%3A1536x864x24%3Ask%3A1.25%3Awv%3A2%3Ads%3A0%2C0%2C516%2C2%2C6%2C0%2C%2C6449%2C464%2C%2C%2C%2C6992%3Aco%3A0%3Acpf%3A1%3Antf%3A1%3Ans%3A1681640166174%3Aadb%3A1%3Arqnl%3A1%3Ast%3A1681640176%3At%3A%D0%A0%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D1%8B%20%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0%20%D0%BF%D0%BE%20%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%83%20%22test%22.%20OZ.by&t=gdpr(14)clc(0-0-0)rqnt(1)aw(1)ti(2)', {
                params: {
                    availability: '1;2;3',
                    c: '0',
                    q: 'test',
                    sort: 'relev_desc',
                    type: '0',
                                                                
                },            
            })
        });

        test('status code should be 200', async () => {
            expect(response.status).toEqual(200)
        })

        test('json schema should be valid', async () => {
            const result = await validator.validate(response.data, searchItem);
            expect(result.valid).toEqual(true)
        })
      })

    describe('Test#3 Search By category and price filter', function () {
        let response;
        beforeAll(async () => {
            response = await axios({
                method: "GET",
                url: 'https://mc.yandex.ru/watch/1067243?wmode=7&page-url=https%3A%2F%2Foz.by%2Fthrows%2F%3Favailability%3D1%3B2%26r_cost%3Dfrom~100%3Bto~200%26sort%3Dbest_desc&page-ref=https%3A%2F%2Foz.by%2Fthrows%2F&charset=utf-8&uah=chu%0A%22Chromium%22%3Bv%3D%22112%22%2C%22Google%20Chrome%22%3Bv%3D%22112%22%2C%22Not%3AA-Brand%22%3Bv%3D%2299%22%0Acha%0Ax86%0Achb%0A64%0Achf%0A112.0.5615.86%0Achl%0A%22Chromium%22%3Bv%3D%22112.0.5615.86%22%2C%22Google%20Chrome%22%3Bv%3D%22112.0.5615.86%22%2C%22Not%3AA-Brand%22%3Bv%3D%2299.0.0.0%22%0Achm%0A%3F0%0Achp%0AWindows%0Achv%0A10.0.0&browser-info=pv%3A1%3Avf%3Aihb4q796484i93absue02n%3Afp%3A5168%3Afu%3A0%3Aen%3Autf-8%3Ala%3Aen-US%3Av%3A1012%3Acn%3A1%3Adp%3A0%3Als%3A739665959349%3Ahid%3A962107029%3Az%3A180%3Ai%3A20230416145132%3Aet%3A1681645892%3Ac%3A1%3Arn%3A397313702%3Arqn%3A77%3Au%3A1681640066630145299%3Aw%3A935x704%3As%3A1536x864x24%3Ask%3A1.25%3Awv%3A2%3Ads%3A0%2C0%2C527%2C2%2C5%2C0%2C%2C5623%2C449%2C%2C%2C%2C6264%3Aco%3A0%3Acpf%3A1%3Antf%3A1%3Ans%3A1681645885092%3Aadb%3A1%3Arqnl%3A1%3Ast%3A1681645893%3At%3A%D0%9F%D0%BE%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D0%BB%D0%B0%2C%20%D0%BF%D0%BB%D0%B5%D0%B4%D1%8B%3A%20%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D0%B2%20%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B5%20%D0%B2%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B5%20%D1%81%20%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%BE%D0%B9%20%E2%80%94%20OZ.by&t=gdpr(14)clc(0-0-0)rqnt(1)aw(1)ti(2)',
                params: {
                    availability: '1;2',
                    r_cost: 'from~100;to~200',
                    sort: 'best_desc',
                },
            })
        });

        test('status code should be 200', async () => {
            expect(response.status).toEqual(200)
        })

        test('json schema should be valid', async () => {
            const result = await validator.validate(response.data, searchItem);
            expect(result.valid).toEqual(true)
        })
    });
        
    describe('Test#4  ', function () {
        let response;
        beforeAll(async () => {
            response = await axios({
                method: "GET",
                url: 'https://mc.yandex.ru/watch/1067243?wmode=7&page-url=https%3A%2F%2Foz.by%2Fabout%2Fjob.phtml%3Faction%3Dabout_job_show%26id%3D352&page-ref=https%3A%2F%2Foz.by%2Fabout%2Fjob.phtml&charset=utf-8&uah=chu%0A%22Chromium%22%3Bv%3D%22112%22%2C%22Google%20Chrome%22%3Bv%3D%22112%22%2C%22Not%3AA-Brand%22%3Bv%3D%2299%22%0Acha%0Ax86%0Achb%0A64%0Achf%0A112.0.5615.86%0Achl%0A%22Chromium%22%3Bv%3D%22112.0.5615.86%22%2C%22Google%20Chrome%22%3Bv%3D%22112.0.5615.86%22%2C%22Not%3AA-Brand%22%3Bv%3D%2299.0.0.0%22%0Achm%0A%3F0%0Achp%0AWindows%0Achv%0A10.0.0&browser-info=pv%3A1%3Avf%3Aihb4q796484i93absudza7%3Afp%3A3521%3Afu%3A0%3Aen%3Autf-8%3Ala%3Aen-US%3Av%3A1012%3Acn%3A1%3Adp%3A0%3Als%3A739665959349%3Ahid%3A61504927%3Az%3A180%3Ai%3A20230416151203%3Aet%3A1681647124%3Ac%3A1%3Arn%3A429843805%3Arqn%3A80%3Au%3A1681640066630145299%3Aw%3A857x704%3As%3A1536x864x24%3Ask%3A1.25%3Awv%3A2%3Ads%3A0%2C0%2C326%2C4%2C4%2C0%2C%2C4055%2C331%2C%2C%2C%2C4403%3Aco%3A0%3Acpf%3A1%3Antf%3A1%3Ans%3A1681647118236%3Aadb%3A1%3Arqnl%3A1%3Ast%3A1681647124%3At%3A%D0%9F%D1%80%D0%BE%D0%B4%D0%B0%D0%B2%D0%B5%D1%86-%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D0%BD%D1%82%20%D0%B2%20%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B5.%20%D0%92%D0%B0%D0%BA%D0%B0%D0%BD%D1%81%D0%B8%D1%8F%20OZ.by&t=gdpr(14)clc(0-0-0)rqnt(1)aw(1)ti(2)',
                headers: {
                    action: 'about_job_show',
                    id: '352'
                },
                
            })
        });

        test('status code should be 200', async () => {
            expect(response.status).toEqual(200)
        })

        test('json schema should be valid', async () => {
            const result = await validator.validate(response.data, searchItem);
            expect(result.valid).toEqual(true)
        })
    });

});
})