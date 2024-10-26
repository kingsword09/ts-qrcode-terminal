# ts-qrcode-terminal
[![JSR @kingsword09](https://jsr.io/badges/@kingsword09)](https://jsr.io/@kingsword09) [![JSR](https://jsr.io/badges/@kingsword09/ts-qrcode-terminal)](https://jsr.io/@kingsword09/ts-qrcode-terminal)
<a :href="`https://www.npmjs.com/package/ts-qrcode-terminal`" target="_blank"><img src="https://img.shields.io/npm/v/ts-qrcode-terminal?color=32A9C3&amp;labelColor=1B3C4A&amp;label=npm" alt="NPM version"></a>

### examples
#### node
```ts
import { generate, QRErrorCorrectLevel } from "ts-qrcode-terminal";
generate("https://github.com/kingsword09/ts-qrcode-terminal", {
  small: true,
  qrErrorCorrectLevel: QRErrorCorrectLevel.L,
});
```

#### deno
```ts
import { generate, QRErrorCorrectLevel } from "npm:ts-qrcode-terminal";
generate("https://github.com/kingsword09/ts-qrcode-terminal", {
  small: true,
  qrErrorCorrectLevel: QRErrorCorrectLevel.L,
});
```
or
```ts
import { generate, QRErrorCorrectLevel } from  "jsr:@kingsword09/ts-qrcode-terminal"
generate("https://github.com/kingsword09/ts-qrcode-terminal", {
  small: true,
  qrErrorCorrectLevel: QRErrorCorrectLevel.L,
});
```

## Reference:
- [gtanner/qrcode-terminal](https://github.com/gtanner/qrcode-terminal)
- [sasanquaneuf/ts-qrcode](https://github.com/sasanquaneuf/ts-qrcode)
