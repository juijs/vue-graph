import { mount } from 'vue-test-utils'
import GraphLine from '@/components/line'

describe('line.js', () => {
    it('snapshot', () => {
        const wrapper = mount(GraphLine, {
            propsData: {
                width: 800,
                height: 400,
                axisFullMode: true,
                shape: 'normal',
                opacity: 0.6,
                labels: [ '1Q', '2Q', '3Q', '4Q' ],
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