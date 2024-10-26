import { QRCode } from "./src/QRCode.ts";
import { QRErrorCorrectLevel } from "./src/constants.ts";
import { fill, repeat, toCell, white } from "./src/helper.ts";
import type { QrcodeOptions } from "./types.ts";
export { QRErrorCorrectLevel };

/**
 * This is a function that generates QR codes.
 *
 * @example
 * ```ts
 * import { generate, QRErrorCorrectLevel } from  "jsr:@kingsword09/ts-qrcode-terminal"
 * generate("https://github.com/kingsword09/ts-qrcode-terminal", {
 *   small: true,
 *   qrErrorCorrectLevel: QRErrorCorrectLevel.L,
 * });
 * ```
 */
export function generate(
  input: string,
  opts: QrcodeOptions = {
    small: false,
    qrErrorCorrectLevel: QRErrorCorrectLevel.L,
  }
) {
  const qrcode = new QRCode(-1, opts.qrErrorCorrectLevel);
  qrcode.addData(input);
  qrcode.make();

  let output = "";
  if (opts.small) {
    const BLACK = true,
      WHITE = false;
    const moduleCount = qrcode.getModuleCount();
    const moduleData = qrcode.modules.slice();

    const oddRow = moduleCount % 2 === 1;
    if (oddRow) {
      moduleData.push(fill(moduleCount, WHITE));
    }

    const platte = {
      WHITE_ALL: "\u2588",
      WHITE_BLACK: "\u2580",
      BLACK_WHITE: "\u2584",
      BLACK_ALL: " ",
    };

    const borderTop = repeat(platte.BLACK_WHITE).times(moduleCount + 3);
    const borderBottom = repeat(platte.WHITE_BLACK).times(moduleCount + 3);
    output += borderTop + "\n";

    for (let row = 0; row < moduleCount; row += 2) {
      output += platte.WHITE_ALL;

      for (let col = 0; col < moduleCount; col++) {
        if (
          moduleData[row][col] === WHITE &&
          moduleData[row + 1][col] === WHITE
        ) {
          output += platte.WHITE_ALL;
        } else if (
          moduleData[row][col] === WHITE &&
          moduleData[row + 1][col] === BLACK
        ) {
          output += platte.WHITE_BLACK;
        } else if (
          moduleData[row][col] === BLACK &&
          moduleData[row + 1][col] === WHITE
        ) {
          output += platte.BLACK_WHITE;
        } else {
          output += platte.BLACK_ALL;
        }
      }

      output += platte.WHITE_ALL + "\n";
    }

    if (!oddRow) {
      output += borderBottom;
    }
  } else {
    const border = repeat(white).times(qrcode.getModuleCount() + 3);

    output += border + "\n";
    qrcode.modules.forEach(function (row) {
      output += white;
      output += row.map(toCell).join("");
      output += white + "\n";
    });
    output += border;
  }

  console.log(output);
}
