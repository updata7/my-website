<template>
    <div>
        <div>
            <MarkDown :markdownText="markdownText" ></MarkDown>
        </div>
    </div>
</template>

<script>
import blog from '@/docs/blog.md'
import MarkDown from '@/components/MarkDown'
export default {
    components: { MarkDown },
    data() {
        return {
            markdownText: blog
        };
    }
};
</script>
