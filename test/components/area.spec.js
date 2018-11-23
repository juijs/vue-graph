import { mount } from 'vue-test-utils'
import GraphArea from '@/components/area'

describe('area.js', () => {
    it('snapshot', () => {
        const wrapper = mount(GraphArea, {
            propsData: {
                width: 800,
                height: 400,
                axisFullMode: true,
                shape: 'normal',
                opacity: 0.6,
                borderLine: true,
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