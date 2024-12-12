/** @type {import('@rspack/core').Configuration} */
const config = {
    output: {
        path: './built/',
    },
    entry: {
        main: {
            import: './index.js',
            chunkLoading: 'import-scripts',
        },
        side: {
            import: './side.js',
        },
    },
    optimization: {
        minimize: false,
        runtimeChunk: 'single',
        splitChunks: { chunks: 'all', minSize: 1 },
    },
}
export default config
