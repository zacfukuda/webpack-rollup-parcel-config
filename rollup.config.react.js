import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'src/index.jsx',
	output: {
		file: 'dist/rollup-react.js',
		format: 'iife',
	},
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    babel({
      babelHelpers: 'bundled'
    }),
    resolve(),
    commonjs(),
  ],
};
