import { mount } from 'vue-test-utils'
import Graph3DLine from '@/components/line3d'

describe('line3d.js', () => {
    it('snapshot', () => {
        const wrapper = mount(Graph3DLine, {
            propsData: {
                width: 800,
                height: 600,
                axisMin: 0,
                axisMax: 50,
                paddingTop: 100,
                paddingBottom: 100,
                depth: 180,
                names: [ 'MS', 'Apple', 'Google' ],
                labels: [ '1Q', '2Q', '3Q', '4Q' ],
                values: [
                    [ 0, 15, 8, 18 ],
                    [ 15, 6, 10, 5 ],
                    [ 20, 20, 20, 20 ]
                ]
            }
        });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
});