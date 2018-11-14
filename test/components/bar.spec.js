import { mount } from 'vue-test-utils'
import GraphBar from '@/components/bar'

describe('bar.js', () => {
    it('should render correct contents', () => {
        const wrapper = mount(GraphBar, {
            propsData: {
                width: 600,
                height: 400,
                axisMin: 0,
                axisMax: 50,
                labels: ['1Q', '2Q', '3Q', '4Q'],
                values: [
                    [10, 5, 5, 5],
                    [40, 10, 10, 10],
                    [30, 30, 30, 30]
                ]
            }
        });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
});