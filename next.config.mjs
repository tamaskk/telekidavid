/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.docx$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/documents/',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
