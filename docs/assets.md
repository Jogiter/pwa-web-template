# assets 文件夹

```tree

```

## image 命名规则以及存放目录结构

图片的功能命名 `name`，因为页面区分 dark/light 模式，以及多语言场景。因此设定按照命名规则如下：

```js
// dark-en-images
import name_en from '~/assets/images/2x/dark/en/name.png'

// dark-zh-images
import name_zh from '~/assets/images/2x/dark/zh/name.png'

// light-en-images
import light_name_en from '~/assets/images/2x/light/en/name.png'

// light-zh-images
import light_name_zh from '~/assets/images/2x/light/zh/name.png'

// mobile-dark-en-images
import m_name_en from '~/assets/images/mobile/2x/dark/en/name.png'

// mobile-dark-zh-images
import m_name_zh from '~/assets/images/mobile/2x/dark/zh/name.png'

// mobile-light-en-images
import m_light_name_en from '~/assets/images/mobile/2x/light/en/name.png'

// mobile-light-zh-images
import m_light_name_zh from '~/assets/images/mobile/2x/light/zh/name.png'
```

目录结构如下：

```tree
.
├── 2x
│   ├── dark
│   │   ├── en
│   │   └── zh
│   └── light
│       ├── en
│       └── zh
└── mobile
    └── 2x
        ├── dark
        │   ├── en
        │   └── zh
        └── light
            ├── en
            └── zh
```

在判断环境时，可以使用如下函数:

```ts
const { t, locale } = useI18n()
const colorMode = useColorMode()

/**
 * 获取正确的图片
 */
const getImage = ([img_en, img_zh, light_img_en, light_img_zh]) =>
  colorMode.preference === 'dark'
    ? locale.value === 'en'
      ? img_en
      : img_zh
    : locale.value === 'en'
    ? light_img_en
    : light_img_zh

provide('getImage', getImage)
```

### demo

参考 [components/home/section4.vue]():

```js
// dark-en-images
import tab1_en from '~/assets/images/2x/dark/en/tab1.png'
import tab2_en from '~/assets/images/2x/dark/en/tab2.png'
import tab3_en from '~/assets/images/2x/dark/en/tab3.png'
import tab4_en from '~/assets/images/2x/dark/en/tab4.png'
// dark-zh-images
// import tab1_zh from '~/assets/images/2x/dark/zh/tab1.png'
// import tab2_zh from '~/assets/images/2x/dark/zh/tab2.png'
// import tab3_zh from '~/assets/images/2x/dark/zh/tab3.png'
// import tab4_zh from '~/assets/images/2x/dark/zh/tab4.png'
// light-en-images
import light_tab1_en from '~/assets/images/2x/light/en/tab1.png'
import light_tab2_en from '~/assets/images/2x/light/en/tab2.png'
import light_tab3_en from '~/assets/images/2x/light/en/tab3.png'
import light_tab4_en from '~/assets/images/2x/light/en/tab4.png'
// light-zh-images
// import light_tab1_zh from '~/assets/images/2x/light/zh/tab1.png'
// import light_tab2_zh from '~/assets/images/2x/light/zh/tab2.png'
// import light_tab3_zh from '~/assets/images/2x/light/zh/tab3.png'
// import light_tab4_zh from '~/assets/images/2x/light/zh/tab4.png'
// mobile-dark-en-images
import m_tab1_en from '~/assets/images/mobile/2x/dark/en/tab1.png'
import m_tab2_en from '~/assets/images/mobile/2x/dark/en/tab2.png'
import m_tab3_en from '~/assets/images/mobile/2x/dark/en/tab3.png'
import m_tab4_en from '~/assets/images/mobile/2x/dark/en/tab4.png'
// mobile-dark-zh-images
// import m_tab1_zh from '~/assets/images/mobile/2x/dark/zh/tab1.png'
// import m_tab2_zh from '~/assets/images/mobile/2x/dark/zh/tab2.png'
// import m_tab3_zh from '~/assets/images/mobile/2x/dark/zh/tab3.png'
// import m_tab4_zh from '~/assets/images/mobile/2x/dark/zh/tab4.png'
// mobile-light-en-images
import m_light_tab1_en from '~/assets/images/mobile/2x/light/en/tab1.png'
import m_light_tab2_en from '~/assets/images/mobile/2x/light/en/tab2.png'
import m_light_tab3_en from '~/assets/images/mobile/2x/light/en/tab3.png'
import m_light_tab4_en from '~/assets/images/mobile/2x/light/en/tab4.png'
// mobile-light-zh-images
// import m_light_tab1_zh from '~/assets/images/mobile/2x/light/zh/tab1.png'
// import m_light_tab2_zh from '~/assets/images/mobile/2x/light/zh/tab2.png'
// import m_light_tab3_zh from '~/assets/images/mobile/2x/light/zh/tab3.png'
// import m_light_tab4_zh from '~/assets/images/mobile/2x/light/zh/tab4.png'
```

## minify images by tinify

> https://tinypng.com/developers/reference/nodejs

规则：

- 渐变图片
  - 能用 svg 替换的，使用 svg 替换
  - 不能使用 svg 替换，则不进行压缩，避免图片不符合预期
- 其他图片
  - 使用 tinify 进行压缩

index.js

```js
const fs = require('fs')
const path = require('path')
const tinify = require('tinify')

// Set your Tinify API key
tinify.key = ''

const inputDir = '../assets/images'
const outputDir = 'optimized_images'

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

// Function to create directories recursively
function createDirectoryRecursively(directory) {
  const parts = directory.split(path.sep)
  for (let i = 1; i <= parts.length; i++) {
    const currentPath = path.join.apply(null, parts.slice(0, i))
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath)
    }
  }
}

// Function to tinify a PNG image
async function tinifyPNG(inputPath, outputPath) {
  try {
    const source = tinify.fromFile(inputPath)

    // Create necessary output folders
    const outputFolderPath = path.dirname(outputPath)
    createDirectoryRecursively(outputFolderPath)

    await source.toFile(outputPath)
    console.log(`Tinified ${inputPath}`)
  } catch (error) {
    console.error(`Error tinifying ${inputPath}:`, error.message)
  }
}

// Recursively process files in the input directory
function processFiles(dir) {
  const files = fs.readdirSync(dir)
  files.forEach(async (file) => {
    const filePath = path.join(dir, file)
    const outputFilePath = path.join(
      outputDir,
      path.relative(inputDir, filePath),
    )

    if (fs.statSync(filePath).isDirectory()) {
      // Recurse into subdirectories
      processFiles(filePath)
    } else if (path.extname(file).toLowerCase() === '.png') {
      // Tinify only if the file is a PNG image
      await tinifyPNG(filePath, outputFilePath)
    }
  })
}

// Start processing files
processFiles(inputDir)
```

### dynamic image src

```js
// dark-images
const Bitcoin = new URL(
  '~/assets/images/2x/dark/en/Bitcoin.png',
  import.meta.url,
).href
const Binance = new URL(
  '~/assets/images/2x/dark/en/Binance.png',
  import.meta.url,
).href
const Tron = new URL('~/assets/images/2x/dark/en/Tron.png', import.meta.url)
  .href
const Litecoin = new URL(
  '~/assets/images/2x/dark/en/Litecoin.png',
  import.meta.url,
).href
const Dklink = new URL('~/assets/images/2x/dark/en/Dklink.png', import.meta.url)
  .href
const Ethereum = new URL(
  '~/assets/images/2x/dark/en/Ethereum.png',
  import.meta.url,
).href
const Tether = new URL('~/assets/images/2x/dark/en/Tether.png', import.meta.url)
  .href
const Dogecoin = new URL(
  '~/assets/images/2x/dark/en/Dogecoin.png',
  import.meta.url,
).href
// light-images
const light_Bitcoin = new URL(
  '~/assets/images/2x/light/en/Bitcoin.png',
  import.meta.url,
).href
const light_Binance = new URL(
  '~/assets/images/2x/light/en/Binance.png',
  import.meta.url,
).href
const light_Tron = new URL(
  '~/assets/images/2x/light/en/Tron.png',
  import.meta.url,
).href
const light_Litecoin = new URL(
  '~/assets/images/2x/light/en/Litecoin.png',
  import.meta.url,
).href
const light_Dklink = new URL(
  '~/assets/images/2x/light/en/Dklink.png',
  import.meta.url,
).href
const light_Ethereum = new URL(
  '~/assets/images/2x/light/en/Ethereum.png',
  import.meta.url,
).href
const light_Tether = new URL(
  '~/assets/images/2x/light/en/Tether.png',
  import.meta.url,
).href
const light_Dogecoin = new URL(
  '~/assets/images/2x/light/en/Dogecoin.png',
  import.meta.url,
).href

const section6s = computed(() =>
  colorMode.preference === 'dark'
    ? [Bitcoin, Binance, Tron, Litecoin, Dklink, Ethereum, Tether, Dogecoin]
    : [
        light_Bitcoin,
        light_Binance,
        light_Tron,
        light_Litecoin,
        light_Dklink,
        light_Ethereum,
        light_Tether,
        light_Dogecoin,
      ],
)
```
