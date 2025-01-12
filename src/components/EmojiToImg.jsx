export default function EmojiToImg(countryCode) {

    if (countryCode === undefined) return
    return (
        <img height='20px' src={`https://flagcdn.com/96x72/${countryCode}.png`} alt={{countryCode} & 'flag'} />
    )
}
