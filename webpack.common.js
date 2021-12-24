// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.ts"),
    vendor: path.resolve(__dirname, "./src/vendor.ts"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
}
