
module.exports = {
  
  plugins: [
    
    // [
    //   "module-resolver", 
    //   {
    //     alias: {
    //       "#root": "./src",
    //       "@core": "core/dist",
    //     }
    //   }
    // ],
    // // ['module-extension', {
    //   mjs: 'js',
    // }],
    // "import-graphql"
  ],
  presets: [
    [

      "@babel/preset-env",
      {
        targets: {
          node: "current",
          esmodules: true,
        }
      }
    ]
  ]
}