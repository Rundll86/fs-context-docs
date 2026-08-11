import { defineConfig } from "vitepress";

export default defineConfig({
    base: "/fs-context/",
    lang: "zh-CN",
    title: "FS-Context",
    description: "一个易用的 ScratchExtension TypeScript 上下文",
    lastUpdated: true,
    outDir: "../dist",
    head: [["link", { rel: "icon", href: "/fs-context/favicon.ico" }]],
    themeConfig: {
        logo: "/fs-context/favicon.ico",
        nav: [
            { text: "v1 文档", link: "/v1/" },
            { text: "v2 文档", link: "/v2/" },
            { text: "Github", link: "https://github.com/Rundll86/fs-context" }
        ],
        sidebar: {
            "/v1/": [
                {
                    text: "v1 指南",
                    collapsed: false,
                    items: [
                        { text: "快速开始", link: "/v1/guide/" },
                        { text: "编写无入口的独立模块", link: "/v1/guide/standalone" },
                        { text: "拓展开发中的工具集", link: "/v1/guide/api/unnecessary" },
                        { text: "通用 API 导航", link: "/v1/guide/api/general/" },
                        { text: "startHats", link: "/v1/guide/api/general/startHats" }
                    ]
                },
                {
                    text: "已储存的提议",
                    collapsed: true,
                    items: [
                        { text: "使用TS的装饰器特性定义拓展积木", link: "/v1/suggestion/block-decorator" },
                        { text: "自定义积木参数类型和对应加载器", link: "/v1/suggestion/arg-loader" },
                        { text: "使用新写法的积木文本解析器", link: "/v1/suggestion/text-parser" },
                        { text: "添加eslint支持", link: "/v1/suggestion/eslint-support" },
                        { text: "支持类似函数重载的切换按钮", link: "/v1/suggestion/overload-by-rest" },
                        { text: "实现动态参数，类似Rest", link: "/v1/suggestion/rest-args" }
                    ]
                }
            ],
            "/v2/": [
                {
                    text: "v2 指南",
                    collapsed: false,
                    items: [
                        { text: "快速开始", link: "/v2/guide/" },
                        { text: "API 指南", link: "/v2/guide/api" },
                        { text: "高级用法", link: "/v2/guide/advanced" }
                    ]
                }
            ]
        },
        outline: {
            level: [2, 3],
            label: "本页目录"
        },
        docFooter: {
            prev: "上一页",
            next: "下一页"
        },
        sidebarMenuLabel: "菜单",
        returnToTopLabel: "返回顶部",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式"
    }
});
