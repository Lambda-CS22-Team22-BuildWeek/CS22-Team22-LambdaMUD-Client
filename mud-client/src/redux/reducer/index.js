import { 

    SENDING_CREDENTIALS,
    AUTHENTICATED_CREDENTIALS,
    AUTHENTICATION_FAILED,
    INIT_GAME,
    INIT_SUCCESS,
    INIT_FAILED,
    FETCHING_ALL_ROOMS,
    FETCHED_ALL_ROOMS,
    FAILED_ALL_ROOMS,
    SEND_PLAYER_MOVE,
    PLAYER_MOVED,
    FAILED_PLAYER_MOVE,
    LOADING,
    ON_CHANGE

} from '../actions'

const initialState = {

    gameState: {
        description: "",
        error_message: "",
        title: '',
        firstRoom: {},
        allRooms: [],
    },

    registerState: {
        "username": "",
        "email": "",
        "password1": "",
        "password2": "",
        loading: false,
    },

    loginState: {
        username: "",
        password: "",
        loading: false
    },

    playerState: {
        userID: null,
        name: '',
        current_room: '',
        x: 0,
        y: 0
    }
}

const reducer = (state=initialState, action) => {

    switch(action.type){
        case INIT_SUCCESS:

            const { uuid, name, description, title } = action.payload;
            console.log(action.payload)
            return {
                ...state,

                gameState: {
                   ...state.gameState,
                   description,
                   title
                },

                playerState: {
                    ...state.playerState,
                    userID: uuid,
                    name
                }

            }
        
        case FETCHED_ALL_ROOMS:
            console.log(state.gameState.allRooms)
            return{
                ...state,
                gameState: {
                    ...state.gameState,
                    allRooms: action.payload
                }
            }

        case SEND_PLAYER_MOVE:
           switch(action.payload){
                case 'w':
                    return {
                        ...state,
                        playerState: {
                            ...state.playerState,
                            y: state.playerState.y -= 40
                        }
                    }
                case 'e':
                    return {
                        ...state,
                        playerState: {
                            ...state.playerState,
                            y: state.playerState.y += 40
                        }
                    }
                case 'n':
                    return {
                        ...state,
                        playerState: {
                            ...state.playerState,
                            x: state.playerState.x -= 40
                        }
                    }
                case 's':
                    return {
                        ...state,
                        playerState: {
                            ...state.playerState,
                            x: state.playerState.x += 40
                        }
                    }
                default:
                    return state
            }
            

        case ON_CHANGE:
            return{
                ...state,
                loginState: {
                    ...state.loginState,
                    [action.payload.name]: action.payload.value
                },
                registerState: {
                    ...state.registerState,
                    [action.payload.name]: action.payload.value
                }
            }
        default:
            return state
    }
}

export default reducer;