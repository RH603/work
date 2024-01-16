function generateRandomHex() {
    const num = Math.floor(Math.random() * 256)
    // padStart (최대 길이, "최대길이가 안됄시 입력한 값이 들아간다")
    const hex = num.toString(16).padStart(2, "0").toUpperCase()
    return hex
}

export default function generateColorCode() {
    const colorCode= `#${generateRandomHex()}${generateRandomHex()}${generateRandomHex()}`
    return colorCode
}