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
                // target: 'https://dashboard.virtub.io',
                // target: 'https://api.twitter.com',
                target: 'http://localhost:8080',
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
