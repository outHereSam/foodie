import {defineConfig,presetIcons, presetWind4, transformerDirectives } from 'unocss'

export default defineConfig({
    presets: [
        presetWind4({ dark: "media" }),
        presetIcons(),
    ],
    transformers: [
        transformerDirectives(),
    ]
})