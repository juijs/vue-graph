import { mount } from 'vue-test-utils'
import GraphRangeBar from '@/components/rangebar'

describe('rangebar.js', () => {
    it('snapshot', () => {
        const wrapper = mount(GraphRangeBar, {
            propsData: {
                width: 600,
                height: 400,
                axisMin: 0,
                axisMax: 50,
                barMargin: 30,
                labels: [ '1Q', '2Q', '3Q', '4Q' ],
                values: [
                    [ [3,25], [25,30], [30,43], [43,48] ],
                    [ [10,20], [20,25], [25,33], [33,45] ],
                    [ [5,35], [35,38], [38,40], [40,48] ]
                ]
            }
        });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
});