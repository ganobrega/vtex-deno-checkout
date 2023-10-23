/// <reference lib="deno.ns" />

import sass from "https://deno.land/x/denosass@1.0.6/mod.ts";
import postcss from "https://deno.land/x/postcss@8.4.16/mod.js";
import autoprefixer from "https://deno.land/x/postcss_autoprefixer@0.2.8/mod.js";
import * as esbuild from "https://deno.land/x/esbuild@v0.19.4/mod.js";
import * as swc from 'https://deno.land/x/swc@0.2.1/mod.ts'


const inputs = {
  css: "./checkout6-custom.scss",
  js: "./checkout6-custom.ts",
};

const outputs = {
  css: "./checkout6-custom.css",
  js: "./checkout6-custom.js",
  jsForOldBrowsers: "./checkout6-custom.ie.js",
};

/*########*
 *#  JS  #*
 *########*/
// Transpile to ES6 for modern browsers
await esbuild.build({
  entryPoints: [inputs.js],
  bundle: true,
  sourcemap: false,
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outfile: outputs.js,
});

// Transpile to ES5 for old browsers
const { code } = swc.transform(Deno.readTextFileSync(outputs.js), {
  jsc: { target: 'es5' },
  sourceMaps: false,
  module: { type: 'es6' },
})

Deno.writeTextFileSync(outputs.jsForOldBrowsers, code)

/*#########*
 *#  CSS  #*
 *#########*/
await postcss([autoprefixer as never]).process(
  sass(Deno.readTextFileSync(inputs.css), {
    load_paths: [
      "./styles/abstract",
      "./styles/components",
      "./styles/layout",
      "./styles/tools",
      "./styles/vendors",
    ],
  }).to_string("expanded") as string,
  { map: false, from: inputs.css, to: outputs.css },
).then((x) => Deno.writeTextFileSync(outputs.css, x.toString()));

console.log(new Date().toLocaleString() + ' - Done!')

if(Deno.args.includes('--preproduction')) {
  Deno.exit(0)
}