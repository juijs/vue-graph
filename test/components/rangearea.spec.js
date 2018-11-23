import { mount } from 'vue-test-utils'
import GraphRangeArea from '@/components/rangearea'

describe('rangearea.js', () => {
    it('snapshot', () => {
        const wrapper = mount(GraphRangeArea, {
            propsData: {
                width: 600,
                height: 400,
                axisFullMode: true,
                labels: [ "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008" ],
                values: [
                    [ 4, 6, 8 ],
                    [ 5, 7, 9 ],
                    [ 6, 8, 11 ],
                    [ 5, 6, 10 ],
                    [ 2, 3, 6 ],
                    [ 5, 6, 8 ],
                    [ 2, 4, 6 ],
                    [ 8, 10, 12 ]
                ]
            }
        });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
});