declare module '*.vue' {
    import Vue, { defineComponent, createApp } from 'vue'

    const component: ReturnType<typeof defineComponent>;
    export default component;
    export default defineComponent;
    export default Vue;
};

declare module 'lodash' {
    import lodash, {isEmpty} from 'lodash';
    export default isEmpty;
    export default lodash;
}