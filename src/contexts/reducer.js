export const initialState = {
    user: null,
    // token: 'BQBkIIkJtfUcPxs-o5PA86NwbS57PoTHuKByF3zlp7TqVNToMvF7K4uXoC2fphtXWW2v9Nb7GMa6OqrADm4Eg1CAUCKzw4wWLHaib4ole8b8Ono3BnoB_rrxK4VpGjjK0ES6Ue_7swul9iB_lgxrdPvvzwebdOjq',
    playlists: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        // case 'SET_DISCOVER__WEEKLY':
        //     return {
        //         ...state,
        //         discover_weekly: action.tracks
        //     }
        default:
            return state
    }
}

export default reducer