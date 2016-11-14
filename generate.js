/**
 * Created by ingam on 14/11/2016.
 */

module.exports = function () {
    var fakerator = require('fakerator')('es-ES');
    var _ = require('lodash');


    return {
        datasets: _.times(5,function (n) {
            return {
                id:n,
                label: fakerator.lorem.sentence(),
                data: _.times(3,function (n) {
                    return {
                        x:fakerator.random.number(100),
                        y:fakerator.random.number(100),
                        r:fakerator.random.number(100)/20
                    }
                }),
                backgroundColor: '#'+fakerator.random.hex(6)
            }
        })

    }

};
/*
datasets: [
    {
        label: 'First Dataset',
        data: [
            {
                x: 20,
                y: 30,
                r: 15
            }
        ],
        backgroundColor:"#FF6384",
        hoverBackgroundColor: "#FF6384"
    },
    {
        label: 'Second Dataset',
        data: [
            {
                x: 40,
                y: 10,
                r: 10
            }
        ],
        backgroundColor:"#DFC",
        hoverBackgroundColor: "#DFC"
    }
]

*/