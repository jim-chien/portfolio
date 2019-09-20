import React from 'react';
import { shallow } from 'enzyme';
import recommendationsMock from '@scripts/mocks/recommendations';
import recommendationsService from '@scripts/recommendations/services/recommendations/recommendations';
import { RAvatar } from '@scripts/base/components/avatar/avatar';
import { RRecommendation } from '@scripts/recommendations/components/recommendation/recommendation';

describe('Recommendation', () => {
  function mount(props = {}){
    return shallow(
      <RRecommendation id={ props.id } />
    );
  }

  beforeEach(() => {
    recommendationsService.get = jest.fn(id => recommendationsMock.find(item => item.id === id));
  });

  it('should have appropriate css class', () => {
    const wrapper = mount({ id: 'semler' });
    expect(wrapper.prop('className')).toEqual('r-recommendation');
  });

  it('should contain company avatar', () => {
    const wrapper = mount({ id: 'semler' });
    expect(wrapper.find(RAvatar).at(0).props().image).toEqual('logo-first-company.png');
  });

  it('should contain person avatar', () => {
    const wrapper = mount({ id: 'semler' });
    expect(wrapper.find(RAvatar).at(1).props().image).toEqual('avatar-semler.jpg');
  });

  it('should show person name', () => {
    const wrapper = mount({ id: 'semler' });
    expect(wrapper.find('h3').text()).toEqual('Ricardo Semler');
  });

  it('should show person professional info', () => {
    const wrapper = mount({ id: 'semler' });
    expect(wrapper.find('[data-recommendation-current-company]').text()).toEqual('Legend at First Company');
    expect(wrapper.find('[data-recommendation-current-company] a').props().href).toEqual('https://first-company.com');
  });

  it('should not include former company in person professional info if no former company has been given', () => {
    const wrapper = mount({ id: 'salgado' });
    expect(wrapper.find('[data-recommendation-former-company]').length).toEqual(0);
  });

  it('should include former company in person professional info if former company has been given', () => {
    const wrapper = mount({ id: 'semler' });
    expect(wrapper.find('[data-recommendation-former-company]').text()).toEqual(`, formerly Former Company`);
    expect(wrapper.find('[data-recommendation-former-company] a').props().href).toEqual('https://former-company.com');
  });

  it('should render some content', () => {
    const wrapper = mount({ id: 'semler' });
    expect(wrapper.find('p').text()).toEqual('First Content');
  });
});
