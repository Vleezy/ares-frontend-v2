var webpack = require("webpack");
module.exports = {
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) =>
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
        },
    },
    stories: ["../src/components/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        "@whitespace/storybook-addon-html",
        "storybook-addon-performance/register",
    ],
    core: {
        builder: "webpack5",
    },
    webpackFinal: async (config) => {
        config.plugins.push(
            new webpack.DefinePlugin({
                "process.env.__NEXT_IMAGE_OPTS": JSON.stringify({
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    domains: [],
                    path: "/",
                    loader: "default",
                }),
            })
        );

        config.module.rules.push({
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "postcss-loader",
                "sass-loader",
            ],
        });

        return config;
    },
};
