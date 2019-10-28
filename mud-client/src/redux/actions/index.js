import axios from 'axios'
import { grid } from '../../components/Map/grid'
import { config } from '../../config'
import { bindActionCreators } from '../../../../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux'

export const SENDING_CREDENTIALS = 'SENDING_CREDENTIALS'
export const AUTHENTICATED_CREDENTIALS = 'AUTHENTICATED_CREDENTIALS'
export const AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED'
export const INIT_GAME = 'INIT_GAME'
export const INIT_SUCCESS = 'INIT_SUCCESS'
export const INIT_FAILED = 'INIT_FAILED'
export const FETCHING_ALL_ROOMS = 'FETCHING_ALL_ROOMS'
export const FETCHED_ALL_ROOMS = 'FETCHED_ALL_ROOMS'
export const FAILED_ALL_ROOMS = 'FAILED_ALL_ROOMS'
export const SEND_PLAYER_MOVE = 'SEND_PLAYER_MOVE'
export const PLAYER_MOVED = 'PLAYER_MOVED'
export const FAILED_PLAYER_MOVE = 'SEND_PLAYER_MOVE'
export const LOADING = 'LOADING'
export const ON_CHANGE = 'ON_CHANGE'
export const CANT_MOVE = 'CANT_MOVE'

// const baseURI = 'https://lambda-mud-test.herokuapp.com/api'
const baseURI = 'https://team22adv.herokuapp.com/api'


export const login = (credential, param, history) => async dispatch => {

    dispatch({type: SENDING_CREDENTIALS})

    console.log(credential)

    try{

        const { data:{key} } = await axios.post(`${baseURI}/${param}/`, credential)

        console.log('login-res', key)

        dispatch({type: AUTHENTICATED_CREDENTIALS})
        localStorage.setItem('authToken', key)
        history.push('/');


    }catch(err){

        console.log(err.message)
        dispatch({type: AUTHENTICATION_FAILED})
    }   
}

export const initGame =  _ => async dispatch => {

    dispatch({type: INIT_GAME})  

    try{

        const init_res = await config.axiosWithAuth().get(`${baseURI}/adv/init/`)

        console.log('init_res', init_res)

        dispatch({type: INIT_SUCCESS, payload: init_res.data})  

    }catch(err){

        console.log(err.message)
        dispatch({type: INIT_FAILED})
    }
}

export const fetchRooms =  _ => async dispatch => {

    dispatch({type: FETCHING_ALL_ROOMS})

    try{

        const { data:{all_rooms} } = await config.axiosWithAuth(baseURI).get(`${baseURI}/adv/rooms/`)

        // const { all_rooms } = data

        console.log('fetchRooms_res', all_rooms)

        const currentRoom = all_rooms[47]
        const nextRoom = []
        const prevRoom = []
        const northRoom = null
        const southRoom = all_rooms[currentRoom.s_to]
        const eastRoom = all_rooms.forEach(room => room.id == currentRoom.e_to)
        const westRoom = all_rooms.forEach(room => room.id == currentRoom.w_to)

        

        currentRoom.x = 400
        currentRoom.y = 400

        all_rooms[0].x = 120 //room 17
        all_rooms[0].y = 440

        all_rooms[1].x = 360
        all_rooms[1].y = 400

        all_rooms[2].x = 160 //room 12
        all_rooms[2].y = 400

        all_rooms[3].x = 320
        all_rooms[3].y = 400

        all_rooms[5].x = 280
        all_rooms[5].y = 400

        all_rooms[6].x = 120 // room 13
        all_rooms[6].y = 400

        all_rooms[7].x = 160 //room 18
        all_rooms[7].y = 440

        all_rooms[8].x = 80 //room 34
        all_rooms[8].y = 480

        all_rooms[9].x = 240
        all_rooms[9].y = 400

        all_rooms[10].x = 80 // rom 14
        all_rooms[10].y = 400

        all_rooms[14].x = 280 //room 29
        all_rooms[14].y = 480

        all_rooms[11].x = 200 //room 11
        all_rooms[11].y = 400

        all_rooms[13].x = 200 //room 19
        all_rooms[13].y = 440

        all_rooms[15].x = 40 //room 15
        all_rooms[15].y = 400

        all_rooms[17].x = 40 //room 16
        all_rooms[17].y = 440

        all_rooms[18].x = 200 //room 39
        all_rooms[18].y = 520

        all_rooms[24].x = 240//room 30
        all_rooms[24].y = 480

        all_rooms[20].x = 240 //room 20
        all_rooms[20].y = 440

        all_rooms[22].x = 280 //room 20
        all_rooms[22].y = 440

        all_rooms[26].x = 40 //room 35
        all_rooms[26].y = 480

        all_rooms[28].x = 200 //room 31
        all_rooms[28].y = 480

        all_rooms[30].x = 240 //room 60
        all_rooms[30].y = 600

        all_rooms[31].x = 160 //room 32
        all_rooms[31].y = 480

        all_rooms[32].x = 80 //room 36
        all_rooms[32].y = 520

        all_rooms[33].x = 120 //room 33
        all_rooms[33].y = 480
        
        all_rooms[35].x = 240 //room 40
        all_rooms[35].y = 520
        
        all_rooms[36].x = 120 //room 37
        all_rooms[36].y = 520

        all_rooms[38].x = 160 //room 38
        all_rooms[38].y = 520

        all_rooms[39].x = 280 //room 41
        all_rooms[39].y = 520

        all_rooms[40].x = 240 //room 50
        all_rooms[40].y = 560

        all_rooms[50].x = 280 //room 49
        all_rooms[50].y = 560

        all_rooms[51].x = 120 //room 56
        all_rooms[51].y = 560

        all_rooms[53].x = 120 //room 61
        all_rooms[53].y = 600

        all_rooms[55].x = 160 //room 57
        all_rooms[55].y = 560

        all_rooms[56].x = 200 //room 58
        all_rooms[56].y = 560

        all_rooms[58].x = 200 //room 59
        all_rooms[58].y = 600

        all_rooms[69].x = 160 //room 70
        all_rooms[69].y = 600

        all_rooms[82].x = 0 //room 98
        all_rooms[82].y = 600

        all_rooms[90].x = 80 //room 90
        all_rooms[90].y = 560

        all_rooms[93].x = 0 //room 92
        all_rooms[93].y = 560

        all_rooms[92].x = 40 //room 91
        all_rooms[92].y = 560

        all_rooms[86].x = 40 //room 99
        all_rooms[86].y = 600

        all_rooms[89].x = 80 //room 100
        all_rooms[89].y = 600

        console.log(currentRoom)

        // for(let i = 0; i < all_rooms.length; i++){
        //     if(all_rooms[i].id == currentRoom.n_to){
        //         nextRoom = all_rooms[i]
        //         console.log(northRoom)
        //     }
        // }
         
        console.log(nextRoom)
        dispatch({type: FETCHED_ALL_ROOMS, payload: all_rooms, first: currentRoom})

        // all_rooms.forEach(room => grid[room.x][room.y] = room)
        
        // const init_room = all_rooms[47]



    }catch(err){

        console.log(err.message)
        dispatch({ type: FAILED_ALL_ROOMS })
    }

}

export const playerMove = direction => async dispatch => {
    console.log(direction)

    try{

        const { data } = await config.axiosWithAuth().post(`${baseURI}/adv/move`, {direction})

        console.log('move_res', data)

        dispatch({type: PLAYER_MOVED, payload: data})

        if(!data.error_msg){

            dispatch({type: SEND_PLAYER_MOVE, payload: direction})
        }else{
            dispatch({type: CANT_MOVE, payload: data.error_msg})
        }

    }catch(err){    

        console.log(err.message)
        dispatch({type: FAILED_PLAYER_MOVE})
    }
}

export const handleOnChange = ({ name, value }) => dispatch => {


    dispatch({ type: ON_CHANGE, payload: {name, value} })
}

