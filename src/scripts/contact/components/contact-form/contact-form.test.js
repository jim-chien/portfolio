import React from 'react';
import { shallow } from 'enzyme';
import { RForm } from '@scripts/base/components/form/form';
import { RContactForm } from '@scripts/contact/components/contact-form/contact-form';
import contactResource from '@scripts/contact/resources/contacts';

describe('Contact Form', () => {
  function mount(){
    return shallow(
      <RContactForm />
    );
  }

  function setFieldValue(wrapper, fieldSelector, value){
    const field = wrapper.find(fieldSelector);
    const { name } = field.getElement().props;
    field.simulate('change', { target: { name, value } });
  }

  beforeEach(() => {
    contactResource.send = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-contact-form');
  });

  it('should send contact on submit', () => {
    const wrapper = mount();
    setFieldValue(wrapper, 'input[name="name"]', 'Rafael');
    setFieldValue(wrapper, 'input[name="email"]', 'some@email.com');
    setFieldValue(wrapper, 'input[name="subject"]', 'Contact');
    setFieldValue(wrapper, 'textarea[name="message"]', 'Hello!');
    wrapper.find(RForm).prop('onSubmit')();
    expect(contactResource.send).toHaveBeenCalledWith({
      to: 'vervetapp@gmail.com',
      name: 'Rafael',
      email: 'some@email.com',
      subject: 'Contact',
      message: 'Hello!'
    });
  });

  it('should set success message on submit success', () => {
    const message = 'Thanks for your contact, I\'ll reply to you soon!';
    const wrapper = mount();
    expect(wrapper.find(RForm).prop('successMessage')).toEqual(undefined);
    wrapper.find(RForm).prop('onSubmitSuccess')();
    expect(wrapper.find(RForm).prop('successMessage')).toEqual(message);
  });

  it('should set error message on submit error', () => {
    const message = `Sorry, something went wrong. Please, try again or send an email to vervetapp@gmail.com`;
    const wrapper = mount();
    expect(wrapper.find(RForm).prop('errorMessage')).toEqual(undefined);
    wrapper.find(RForm).prop('onSubmitError')();
    expect(wrapper.find(RForm).prop('errorMessage')).toEqual(message);
  });
});
