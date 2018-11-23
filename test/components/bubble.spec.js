import { mount } from 'vue-test-utils'
import GraphBubble from '@/components/bubble'

describe('bubble.js', () => {
    it('snapshot', () => {
        const wrapper = mount(GraphBubble, {
            propsData: {
                width: 600,
                height: 400,
                axisMin: 0,
                axisMax: 50,
                axisInterval: 1000 * 60 * 60,
                axisFormat: 'HH',
                showText: true,
                labels: [ new Date('2018-07-09 00:00:00'), new Date('2018-07-10 00:00:00') ],
                values: [
                    [ new Date('2018-07-09 05:23:00'), 20 ],
                    [ new Date('2018-07-09 12:00:00'), 15 ],
                    [ new Date('2018-07-09 15:55:00'), 12 ],
                    [ new Date('2018-07-09 19:01:00'), 30 ]
                ]
            }
        });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
});