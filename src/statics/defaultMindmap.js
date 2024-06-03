import {ROOT_NODE_ID} from './refer';

export default {
    id: "rmind_root_node",
    text: "前端学习路线",
    showChildren: true,
    children: [
        {
            id: "html_css",
            text: "HTML + CSS",
            showChildren: true,
            children: [
                {
                    id: "html",
                    text: "HTML",
                    showChildren: true,
                    children: [
                        {
                            id: "html_basic",
                            text: "HTML 基础",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "semantic_html",
                            text: "语义化",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "forms_validation",
                            text: "表单及校验",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "seo_basics",
                            text: "SEO 优化基础",
                            showChildren: true,
                            children: []
                        }
                    ]
                },
                {
                    id: "css",
                    text: "CSS",
                    showChildren: true,
                    children: [
                        {
                            id: "selectors",
                            text: "选择器",
                            showChildren: true,
                            children: [
                                {
                                    id: "tag_selector",
                                    text: "标签选择器",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "class_selector",
                                    text: "类选择器",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "id_selector",
                                    text: "id 选择器",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "attribute_selector",
                                    text: "属性选择器",
                                    showChildren: true,
                                    children: []
                                }
                            ]
                        },
                        {
                            id: "layouts",
                            text: "常用布局",
                            showChildren: true,
                            children: [
                                {
                                    id: "box_model",
                                    text: "盒模型",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "float",
                                    text: "浮动：float",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "position",
                                    text: "定位：position",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "flex",
                                    text: "弹性布局：flex",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "transitions_animations",
                                    text: "过渡与动画",
                                    showChildren: true,
                                    children: []
                                }
                            ]
                        },
                        {
                            id: "responsive_design",
                            text: "响应式设计",
                            showChildren: true,
                            children: [
                                {
                                    id: "media_queries",
                                    text: "媒体查询",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "rem",
                                    text: "rem",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "viewport",
                                    text: "viewport",
                                    showChildren: true,
                                    children: []
                                }
                            ]
                        },
                        {
                            id: "preprocessors",
                            text: "预处理器",
                            showChildren: true,
                            children: [
                                {
                                    id: "scss",
                                    text: "scss",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "less",
                                    text: "less",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "stylus",
                                    text: "stylus",
                                    showChildren: true,
                                    children: []
                                }
                            ]
                        },
                        {
                            id: "ui_library",
                            text: "UI 库",
                            showChildren: true,
                            children: [
                                {
                                    id: "bootstrap",
                                    text: "Bootstrap",
                                    showChildren: true,
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "javascript",
            text: "JavaScript",
            showChildren: true,
            children: [
                {
                    id: "basic_syntax",
                    text: "基本语法",
                    showChildren: true,
                    children: [
                        {
                            id: "variables",
                            text: "变量",
                            showChildren: true,
                            children: [
                                {
                                    id: "var",
                                    text: "var",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "let",
                                    text: "let",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "const",
                                    text: "const",
                                    showChildren: true,
                                    children: []
                                }
                            ]
                        },
                        {
                            id: "scope",
                            text: "作用域",
                            showChildren: true,
                            children: [
                                {
                                    id: "function_scope",
                                    text: "函数",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "block_scope",
                                    text: "块级",
                                    showChildren: true,
                                    children: []
                                }
                            ]
                        },
                        {
                            id: "conditional_statements",
                            text: "分支语句",
                            showChildren: true,
                            children: [
                                {
                                    id: "if_statement",
                                    text: "if",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "switch_statement",
                                    text: "switch",
                                    showChildren: true,
                                    children: []
                                }
                            ]
                        },
                        {
                            id: "loops",
                            text: "循环语句",
                            showChildren: true,
                            children: [
                                {
                                    id: "for_loop",
                                    text: "for",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "while_loop",
                                    text: "while",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "do_while_loop",
                                    text: "do.while",
                                    showChildren: true,
                                    children: []
                                }
                            ]
                        },
                        {
                            id: "control_flow",
                            text: "流程控制",
                            showChildren: true,
                            children: [
                                {
                                    id: "return",
                                    text: "return",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "container",
                                    text: "container",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "break",
                                    text: "break",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "throw",
                                    text: "throw",
                                    showChildren: true,
                                    children: []
                                },
                                {
                                    id: "try_catch",
                                    text: "try/catch",
                                    showChildren: true,
                                    children: []
                                }
                            ]
                        },
                        {
                            id: "debugger",
                            text: "debugger",
                            showChildren: true,
                            children: []
                        }
                    ]
                },
                {
                    id: "es6_plus",
                    text: "ES6+",
                    showChildren: true,
                    children: [
                        {
                            id: "arrow_functions",
                            text: "箭头函数",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "destructuring",
                            text: "解构赋值",
                            showChildren: true,
                            children: []
                        }
                    ]
                },
                {
                    id: "web_api",
                    text: "WebAPI",
                    showChildren: true,
                    children: [
                        {
                            id: "dom_manipulation",
                            text: "DOM 操作",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "bom_api",
                            text: "BOM API",
                            showChildren: true,
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            id: "network",
            text: "网络",
            showChildren: true,
            children: [
                {
                    id: "sync_async",
                    text: "同步异步",
                    showChildren: true,
                    children: [
                        {
                            id: "event_loop",
                            text: "EventLoop",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "macro_micro_tasks",
                            text: "宏任务、微任务",
                            showChildren: true,
                            children: []
                        }
                    ]
                },
                {
                    id: "http_https",
                    text: "HTTP/HTTPS",
                    showChildren: true,
                    children: []
                },
                {
                    id: "cross_domain",
                    text: "跨域处理",
                    showChildren: true,
                    children: [
                        {
                            id: "browser_security",
                            text: "浏览器安全策略",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "cors",
                            text: "CORS",
                            showChildren: true,
                            children: []
                        }
                    ]
                },
                {
                    id: "promise",
                    text: "promise",
                    showChildren: true,
                    children: [
                        {
                            id: "callback_hell",
                            text: "回调地狱",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "promise_obj",
                            text: "Promise",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "async_await",
                            text: "async/await",
                            showChildren: true,
                            children: []
                        }
                    ]
                },
                {
                    id: "ajax",
                    text: "AJAX",
                    showChildren: true,
                    children: [
                        {
                            id: "fetch",
                            text: "Fetch",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "axios",
                            text: "Axios",
                            showChildren: true,
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            id: "version_control",
            text: "版本控制",
            showChildren: true,
            children: [
                {
                    id: "git",
                    text: "Git",
                    showChildren: true,
                    children: []
                },
                {
                    id: "repo_hosting",
                    text: "仓库托管服务",
                    showChildren: true,
                    children: [
                        {
                            id: "github",
                            text: "Github",
                            showChildren: true,
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            id: "node_npm",
            text: "node 与 npm",
            showChildren: true,
            children: [
                {
                    id: "node_basics",
                    text: "Node 基础",
                    showChildren: true,
                    children: [
                        {
                            id: "module_concept",
                            text: "模块化概念",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "path_module",
                            text: "path 模块",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "http_module",
                            text: "http 模块",
                            showChildren: true,
                            children: []
                        }
                    ]
                },
                {
                    id: "package_management",
                    text: "包管理工具",
                    showChildren: true,
                    children: [
                        {
                            id: "npm_npx",
                            text: "npm/npx",
                            showChildren: true,
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            id: "frameworks",
            text: "前端框架",
            showChildren: true,
            children: [
                {
                    id: "framework",
                    text: "框架",
                    showChildren: true,
                    children: [
                        {
                            id: "react",
                            text: "react",
                            showChildren: true,
                            children: []
                        }
                    ]
                },
                {
                    id: "other_frameworks",
                    text: "其他框架",
                    showChildren: true,
                    children: [
                        {
                            id: "axios",
                            text: "axios",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "component_library",
                            text: "组件库",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "visualization",
                            text: "可视化",
                            showChildren: true,
                            children: [
                                {
                                    id: "echarts",
                                    text: "ECharts",
                                    showChildren: true,
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "typescript",
            text: "TypeScript",
            showChildren: true,
            children: [
                {
                    id: "basic_types_concepts",
                    text: "基本的类型使用与概念",
                    showChildren: true,
                    children: [
                        {
                            id: "basic_types",
                            text: "基本类型",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "interfaces",
                            text: "接口",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "generics",
                            text: "泛型 <T>",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "inheritance",
                            text: "继承",
                            showChildren: true,
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            id: "server_deployment",
            text: "服务器与部署",
            showChildren: true,
            children: [
                {
                    id: "bundlers",
                    text: "打包工具",
                    showChildren: true,
                    children: [
                        {
                            id: "webpack",
                            text: "webpack",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "vite",
                            text: "vite",
                            showChildren: true,
                            children: []
                        }
                    ]
                },
                {
                    id: "code_style",
                    text: "格式规范",
                    showChildren: true,
                    children: [
                        {
                            id: "eslint",
                            text: "ESLint",
                            showChildren: true,
                            children: []
                        },
                        {
                            id: "prettier",
                            text: "Prettier",
                            showChildren: true,
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
}
