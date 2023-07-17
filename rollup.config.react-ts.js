import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: './src/index.tsx',
	output: {
		file: 'dist/rollup-react-ts.js',
		format: 'iife',
	},
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    typescript(),
    babel({babelHelpers: 'bundled'}),
    resolve(),
    commonjs(),
  ],
};
