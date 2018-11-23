import { mount } from 'vue-test-utils'
import GraphStackBar from '@/components/stackbar'

describe('stackbar.js', () => {
    it('snapshot', () => {
        const wrapper = mount(GraphStackBar, {
            propsData: {
                width: 600,
                height: 400,
                fullMode: false,
                showText: true,
                labels: ['1Q', '2Q', '3Q', '4Q'],
                names: [ 'MS', 'Apple', 'Google' ],
                values: [
                    [ 10, 5, 5, 5 ],
                    [ 40, 10, 10, 10 ],
                    [ 30, 30, 30, 30 ]
                ]
            }
        });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
});