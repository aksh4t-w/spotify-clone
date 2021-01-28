export const authEndpoint = 
"https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000/"

const clientId = "c1d0dcd06dcd43da9bcf92db61dc6f98"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-modify-playback-state",
    "user-top-read",
    "playlist-read-private"
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((acc, item) => {
            const parts = item.split('=')
            acc[parts[0]] = decodeURIComponent(parts[1])
            return acc
        }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`