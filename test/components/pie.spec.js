import { mount } from 'vue-test-utils'
import GraphPie from '@/components/pie'

describe('pie.js', () => {
    it('snapshot', () => {
        const wrapper = mount(GraphPie, {
            propsData: {
                width: 500,
                height: 500,
                activeIndex: [ 0, 2 ],
                showTextType: 'inside',
                values: [ 10, 5, 5, 5 ],
                names: [ 'Apple', 'Google', 'MS', 'Facebook' ],
                dataFormat: function(a, b) {
                    if(b) return b + "%";
                    return a;
                }
            }
        });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
});