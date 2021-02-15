const { build } = require('esbuild')

build({
    entryPoints: [require.resolve('@stencil/core/internal/client')],
    format: 'esm',
    bundle: true,
    outfile: 'out.js',
})
