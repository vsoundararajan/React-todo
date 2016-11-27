var webpack = require('webpack');


module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin   ({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components'
        ],
        alias: {

        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true
    }
};

// "inline-source-map" or "eval-source-map" instead.





// module.exports = {
//   entry: './app/app.jsx',
//   output: {
//       path: __dirname,
//       filename: './public/bundle.js'
//   },
//   resolve: {
//       root: __dirname,
//       modulesDirectories: [
//           'node_modules',
//           './app/components'
//       ],
//       alias: {
//
//       },
//       extensions: ['', '.js', '.jsx']
//   },
//   module: {
//       loaders: [
//           {
//               loader: 'babel-loader',
//               query: {
//                   presets: ['react', 'es2015', 'stage-0']
//               },
//               test: /\.jsx?$/,
//               exclude: /(node_modules|bower_components)/
//           }
//       ]
//     }
// };
