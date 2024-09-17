export default function EmojiToImg(flag) {
    let countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt()).map(char =>
        String.fromCharCode(char - 127397).toLowerCase()).join('');
    return (
        <img height='20px' src={`https://flagcdn.com/24x18/${countryCode}.png`} alt='flag' />
    )
}
