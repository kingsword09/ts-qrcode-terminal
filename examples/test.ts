import { generate, QRErrorCorrectLevel } from "../index.ts"

generate("dweb://install?url=http://www.baidu.com", { small: true, qrErrorCorrectLevel: QRErrorCorrectLevel.L })
