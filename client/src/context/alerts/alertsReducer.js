import { 
    ALERT_GET_NAVBAR_NUM_NOTIFICATIONS,
    ALERT_GET_NOTIFICATIONS,
    ALERT_GET_MAILS,
    ALERT_SELECT_MAIL,
    ALERT_MARK_MESSAGE,
    ALERT_DELETE_MESSAGE,
    ERROR_CREATE,
    ERROR_CLEAN
} from '../../types';

const AlertsReducer = (state, action) => {
    switch(action.type) {
        case ALERT_GET_NAVBAR_NUM_NOTIFICATIONS: 
            return {
                ...state,
                notifications_navbar: action.payload.notifications,
                messages_navbar: action.payload.messages
            }
        case ALERT_GET_NOTIFICATIONS: 
            return {
                ...state,
                notifications: action.payload
            }
        case ALERT_GET_MAILS: 
            return {
                ...state,
                messages: action.payload.messages
            }
        case ALERT_SELECT_MAIL:
            return {
                ...state,
                message_selected: state.messages.filter( message => message.message_id === action.payload)[0]
            }
        case ALERT_MARK_MESSAGE:
            return {
                ...state,
                messages_navbar: action.payload.messagesUnseen,
                messages: action.payload.messages
            }
        case ALERT_DELETE_MESSAGE:
            return {
                ...state,
                messages_navbar: action.payload.messagesUnseen,
                messages: action.payload.messages,
                message: action.payload.message
            }
        case ERROR_CREATE: 
            return {
                ...state,
                message: action.payload
            }
        case ERROR_CLEAN: 
            return {
                ...state,
                message: null
            }
        default:
            return state;
    }
}

export default AlertsReducer;