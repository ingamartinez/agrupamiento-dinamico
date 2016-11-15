/**
 * Created by ingam on 14/11/2016.
 */

module.exports = function () {
    var fakerator = require('fakerator')('es-ES');
    var _ = require('lodash');


    return {

        firstChart: _.times(1,function (n) {
            return {
                datasets:_.times(5,function (n) {
                    return{
                        id: n,
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
                        address: fakerator.address.country()+' '+fakerator.address.city()+' '+fakerator.address.street()

                    }
                })

            }
        }),
        secondChart: _.times(1,function (n) {
            return {
                datasets:_.times(5,function (n) {
                    return{
                        id: n,
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
                        address: fakerator.address.country()+' '+fakerator.address.city()+' '+fakerator.address.street()
                    }
                })

            }
        }),
        historyChart: _.times(1,function (n) {
            return {
                datasets:_.times(5,function (n) {
                    return{
                        id: n,
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
                        address: fakerator.address.country()+' '+fakerator.address.city()+' '+fakerator.address.street()
                    }
                })

            }
        })

    }

};
