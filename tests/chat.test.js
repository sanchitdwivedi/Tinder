import React from 'react';
import renderer from 'react-test-renderer'
import ChatScreen from '../screens/ChatScreen'

jest.mock('@react-navigation/core');

describe('Login', () => {
    describe('Rendering', () => {
        it("renders login screen without crash", () => {
            const chat = renderer.create(<ChatScreen/>).toJSON();
            expect(chat).toMatchSnapshot();
        })
    });
});