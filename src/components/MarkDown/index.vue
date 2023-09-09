<template>
    <div>
        <div>
            <h1>{{ title }}</h1>
            <p>Created on {{ formattedDate }}</p>
        </div>
        <div v-html="htmlContent"></div>
    </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import frontmatter from 'markdown-it-front-matter';
import { parseKeyValueString } from '@/utils'
export default {
    props: {
        markdownText: String
    },
    data() {
        return {
            title: '',
            date: '',
            htmlContent: '',
        };
    },
    computed: {
        formattedDate() {
            // 格式化日期
            return new Date(this.date).toLocaleDateString();
        },
    },
    created() {
        let md = new MarkdownIt();
        md.use(frontmatter, (yamlStr) => {
            /**
             * 解析 yaml 元数据块
             * --- 
             * title: xxx
             * date: xxx
             * ---
             */
            const obj = parseKeyValueString(yamlStr)
            this.title = obj.title
            this.date = obj.date
        });
        // 解析 Markdown 文本
        const result = md.render(this.markdownText);
        this.htmlContent = result;
    },
};
</script>
