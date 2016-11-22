/**
 * Created by ingam on 14/11/2016.
 */

module.exports = function () {
    var fakerator = require('fakerator')('es-ES');
    var _ = require('lodash');


    return {

        firstChart: _.times(5,function (n) {
            return{
                id: n+1,
                label: fakerator.lorem.word()+' - '+fakerator.lorem.word(),
                data: _.times(1,function (n) {
                    return {
                        x:fakerator.random.number(50,100),
                        y:fakerator.random.number(50,100),
                        r:fakerator.random.number(50,100)/4
                    }
                }),
                backgroundColor: '#'+fakerator.random.hex(6),
                geo :fakerator.address.geoLocation(),
                address: fakerator.address.country()+' '+fakerator.address.city()+' '+fakerator.address.street(),
                tags:_.times(fakerator.random.number(20),function (n) {
                    return fakerator.lorem.word()

                })
            }
        }),
        secondChart: _.times(5,function (n) {
            return{
                id: n+1,
                label: fakerator.lorem.word()+' - '+fakerator.lorem.word(),
                data: _.times(1,function (n) {
                    return {
                        x:fakerator.random.number(50,100),
                        y:fakerator.random.number(50,100),
                        r:fakerator.random.number(50,100)/4
                    }
                }),
                backgroundColor: '#'+fakerator.random.hex(6),
                geo :fakerator.address.geoLocation(),
                address: fakerator.address.country()+' '+fakerator.address.city()+' '+fakerator.address.street(),
                tags:_.times(fakerator.random.number(20),function (n) {
                    return fakerator.lorem.word()

                })
            }
        }),
        historyChart: _.times(5,function (n) {
            return{
                id: n+1,
                label: fakerator.lorem.word()+' - '+fakerator.lorem.word(),
                data: _.times(1,function (n) {
                    return {
                        x:fakerator.random.number(50,100),
                        y:fakerator.random.number(50,100),
                        r:fakerator.random.number(50,100)/4
                    }
                }),
                backgroundColor: '#'+fakerator.random.hex(6),
                geo :fakerator.address.geoLocation(),
                address: fakerator.address.country()+' '+fakerator.address.city()+' '+fakerator.address.street(),
                tags:_.times(fakerator.random.number(20),function (n) {
                    return fakerator.lorem.word()

                })
            }
        }),
        usuarios: _.times(20,function (n) {
            return{
                id: n+1,
                nombre: fakerator.names.name(),
                tags:_.times(fakerator.random.number(20),function (n) {
                    return fakerator.lorem.word()

                })

            }
        }),
        chartPsicografia: _.times(5,function (n) {
            return{
                id: n+1,
                label: fakerator.lorem.word()+' - '+fakerator.lorem.word(),
                data: _.times(1,function (n) {
                    return {
                        x:fakerator.random.number(50,100),
                        y:fakerator.random.number(50,100),
                        r:fakerator.random.number(50,100)/4
                    }
                }),
                backgroundColor: '#'+fakerator.random.hex(6)
            }
        }),

    }

};
