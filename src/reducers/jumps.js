import Immutable, { Map } from 'immutable';
import {
    REQUEST_JUMPS, RECEIVE_JUMPS,
    SELECT_JUMP, REQUEST_JUMP, RECEIVE_JUMP
} from '../actions/jumps';

function jump(state, action) {

    switch (action.type) {
        case SELECT_JUMP:
            return state.merge(state, {
                isFetching: true,
                selected: action.payload.index
            })

        case REQUEST_JUMP:
            return state.merge(state, {
                isFetching: true
            })

        case RECEIVE_JUMP:
            return state.merge(state, {
                //isFetching: false,
                jump: action.payload.jump,
                //lastUpdated: action.payload.receivedAt
            })

        default:
            return state
    }
}

function jumps(state, action) {

    switch (action.type) {

        case REQUEST_JUMPS:
            return state.merge(state, {
                isFetching: true
            });

        case RECEIVE_JUMPS:
            return state.merge(state, Immutable.fromJS({
                isFetching: false,
                jumps: action.payload.jumps,
                lastUpdated: action.payload.receivedAt
            }));

        default:
            return state
    }
}

export default function reducer(state = Map({
    isFetching: false,
    jump: Map(),
    jumps: Map(),
    requests: {}
}), action) {

    switch (action.type) {
        case SELECT_JUMP:
        case REQUEST_JUMP:
        case RECEIVE_JUMP:
            return jump(state, action);

        case REQUEST_JUMPS:
        case RECEIVE_JUMPS:
            return jumps(state, action);

        case '@@INIT':
            return state.merge(state, Immutable.fromJS({
                jumps: [
                    {
                        id: 'ec98f49d-5ea6-458a-8593-758c974f1a51',
                        number: 1753,
                        date: '2015-11-22',
                        location: 'PCMN Leerlingen veld',
                        airplane: 'Cessna 182 Skylane',
                        jumpType: "Hop 'n pop",
                        comment: "Lekker hopje in de buurt van Utrecht en cow-swooping"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440001',
                        number: 1752,
                        date: '2015-11-21',
                        location: 'Nationaal Paracentrum Teuge',
                        airplane: 'Cessna 208 Supervan',
                        jumpType: "FS"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440084',
                        number: 1751,
                        date: '2015-11-21',
                        location: 'Nationaal Paracentrum Teuge',
                        airplane: 'Cessna 208 Supervan',
                        jumpType: "FS"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440085',
                        number: 1750,
                        date: '2015-11-21',
                        location: 'PCMN Leerlingen veld',
                        airplane: 'Cessna 182 Skylane',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440086',
                        number: 1749,
                        date: '2015-11-21',
                        location: 'PCMN Leerlingen veld',
                        airplane: 'Cessna 182 Skylane',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440087',
                        number: 1748,
                        date: '2015-11-21',
                        location: 'PCMN Leerlingen veld',
                        airplane: 'Cessna 182 Skylane',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440088',
                        number: 1747,
                        date: '2015-11-20',
                        location: 'PCMN Leerlingen veld',
                        airplane: 'Cessna 182 Skylane',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440089',
                        number: 1746,
                        date: '2015-11-20',
                        location: 'PCMN Leerlingen veld',
                        airplane: 'Cessna 182 Skylane',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440090',
                        number: 1745,
                        date: '2015-11-20',
                        location: 'PCMN Leerlingen veld',
                        airplane: 'Cessna 182 Skylane',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440091',
                        number: 1744,
                        date: '2015-11-20',
                        location: 'PCMN Leerlingen veld',
                        airplane: 'Cessna 182 Skylane',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440092',
                        number: 1743,
                        date: '2015-11-20',
                        location: 'PCMN Leerlingen veld',
                        airplane: 'Cessna 182 Skylane',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440093',
                        number: 1742,
                        date: '2015-11-20',
                        location: 'PCMN Leerlingen veld',
                        airplane: 'Cessna 182 Skylane',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440094',
                        number: 1741,
                        date: '2015-11-13',
                        location: 'ENPC Seppe',
                        airplane: 'Cessna 182 Skylane',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440095',
                        number: 1740,
                        date: '2015-11-13',
                        location: 'ENPC Schijf',
                        airplane: 'Cessna 206T',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440096',
                        number: 1739,
                        date: '2015-11-13',
                        location: 'ENPC Schijf',
                        airplane: 'Cessna 206T',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440097',
                        number: 1738,
                        date: '2015-11-13',
                        location: 'ENPC Schijf',
                        airplane: 'Cessna 206T',
                        jumpType: "Hop 'n pop"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440098',
                        number: 1737,
                        date: '2015-11-13',
                        location: 'ENPC Schijf',
                        airplane: 'Cessna 206T',
                        jumpType: "Tandemvideo"
                    },
                    {
                        id: '550e8400-e29b-41d4-a716-446655440099',
                        number: 1736,
                        date: '2015-11-13',
                        location: 'ENPC Seppe',
                        airplane: 'Cessna 206T',
                        jumpType: "Hop 'n pop"
                    }
                ]
            }));

        default:
            return state
    }
}