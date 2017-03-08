module.exports = {
   entry: './main.js',
	
   output: {
      path:'/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 3000,
      hot: true,
      proxy: [
            {
                context: ['/1.1'],
                target: 'https://api.twitter.com',
                secure: false,
                changeOrigin: true
            }
        ]
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
