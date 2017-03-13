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
                context: ['/1.1', '/oauth'],
                target: 'https://api.twitter.com',
                secure: false,
                changeOrigin: true
            }
        ]
   },
	
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
